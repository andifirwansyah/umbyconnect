/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {getUserFollowing, getUserCoversation} from 'utils';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/database';
// eslint-disable-next-line prettier/prettier
const database = firebase.app().database('https://umbyforum-9309b-default-rtdb.asia-southeast1.firebasedatabase.app');

const useConversation = navigation => {
  const userData = useSelector(state => state.user.data);
  const [followings, setFollowings] = useState([]);
  const [followingModal, setFollowingModal] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [conversationSearched, setConversationSearched] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stateChanged, setStateChanged] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    (async () => {
      handleGetFollowing();
      handleGetUserConversation();
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      handleGetUserConversation();
    });
    return unsubscribe;
  }, [navigation]);

  const handleGetFollowing = async () => {
    const response = await getUserFollowing(userData.id);
    if (response.request.status === 200) {
      setFollowings(response.data);
    }
  };

  const handleGetUserConversation = async () => {
    const response = await getUserCoversation();
    if (response.request.status === 200) {
      setConversations(response.data);
      setConversationSearched(response.data);
      handleGetLastMessage(response.data);
      handleGetUserIndicator(response.data);
      setLoading(false);
    }
  };

  const handleGetLastMessage = async args => {
    if (args.length > 0) {
      for (const conversation of args) {
        await firestore()
          .collection(`chats/${conversation.room}/messages`)
          .orderBy('createdAt', 'desc')
          .limit(1)
          .onSnapshot(snapshot => {
            const docData = snapshot.docs.map(val => val.data());
            conversation.lastMessage = docData[0].text;
            conversation.lastSent = docData[0].createdAt;
            conversation.senderId = docData[0].user._id;
            setStateChanged(stateChanged => [...stateChanged, conversation]);
          });
      }
    }
  };

  const handleGetUserIndicator = async args => {
    for (const conversation of args) {
      database.ref(`/users/${conversation.user.id}`).on('value', snapshot => {
        conversation.online = snapshot.val().online;
        setStateChanged(stateChanged => [...stateChanged, conversation]);
      });
    }
  };

  const handleNavigateToConversation = async val => {
    setFollowingModal(false);
    navigation.navigate('ChatRoom', {param: val});
  };

  const handleSearchConversation = async keyword => {
    setSearchKeyword(keyword);
    const newData = conversationSearched.filter(item => {
      const itemData = `${item.user.full_name.toUpperCase()}`;
      const inputKeyword = keyword.toUpperCase();
      return itemData.indexOf(inputKeyword) > -1;
    });
    setConversations(newData);
  };

  return {
    userData,
    followings,
    followingModal,
    setFollowingModal,
    handleNavigateToConversation,
    conversations,
    loading,
    stateChanged,
    searchKeyword,
    handleSearchConversation,
  };
};

export default useConversation;
