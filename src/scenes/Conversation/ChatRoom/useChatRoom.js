/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect, useCallback} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {v4 as uuidv4} from 'uuid';
import {startConversation, sendNotification} from 'utils';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const useChatRoom = (param, navigation) => {
  const userData = useSelector(state => state.user.data);
  const [messages, setMessages] = useState([]);
  const [userState, setUserState] = useState(param);

  useEffect(() => {
    handleGetChats();
  }, []);

  const handleGetChats = async () => {
    console.log('ROOM ID => ', userState.room);
    if (userState.room) {
      await firestore()
        .collection(`chats/${userState.room}/messages`)
        .onSnapshot(documentSnapshot => {
          const docData = documentSnapshot.docs.map(val => val.data());
          docData.sort((a, b) => b.createdAt - a.createdAt);
          setMessages(docData);
        });
    }
  };
  const onSend = async messages => {
    // setMessages(previousMessages =>
    //   GiftedChat.append(previousMessages, messages),
    // );
    const newMessage = messages.find(val => val);
    setMessages(messages => [...messages, newMessage]);
    if (userState.room) {
      await firestore()
        .collection(`chats/${userState.room}/messages`)
        .add({
          _id: messages[0]._id,
          text: messages[0].text,
          createdAt: new Date().getTime(),
          user: {
            _id: userData.id,
          },
        })
        .then(querySnapshot => {
          console.log('SENDING NEW MESSAGE TO => ', param.full_name);
          console.log(param.fcm_token);
          if (!param.online) {
            if (param.fcm_token) {
              sendNotification({
                fcmToken: param.fcm_token,
                title: `Pesan baru dari ${param.full_name}`,
                body: messages[0].text,
              });
            }
          }
        });
    } else {
      handleCreateNewChatRoom(messages);
    }
  };

  const handleCreateNewChatRoom = async messages => {
    const roomID = uuidv4();
    const response = await startConversation({
      to: param.id,
      room: roomID,
    });
    if (response.request.status === 200) {
      userState.room = response.data.room;
      setUserState(userState);
      console.log('USER STATE => ', userState);
      await firestore()
        .collection(`chats/${response.data.room}/messages`)
        .add({
          _id: messages[0]._id,
          text: messages[0].text,
          createdAt: new Date().getTime(),
          user: {
            _id: userData.id,
          },
        })
        .then(querySnapshot => {
          console.log(querySnapshot);
        });
    }
  };

  return {
    userData,
    messages,
    onSend,
  };
};

export default useChatRoom;
