import {useState, useEffect} from 'react';
import {getNotifications, readNotification} from 'utils';
import {firebase} from '@react-native-firebase/database';
// eslint-disable-next-line prettier/prettier
const database = firebase.app().database('https://umbyforum-9309b-default-rtdb.asia-southeast1.firebasedatabase.app');

const useNotification = navigation => {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    (async () => {
      await handleGetNotification();
    })();
  }, []);

  const handleGetNotification = async () => {
    setLoading(true);
    const response = await getNotifications();
    if (response.request.status === 200) {
      const data = response.data;
      data.sort((a, b) => b.createdAt - a.createdAt);
      setNotifications(data);
    }
    setLoading(false);
  };

  const handleNavigation = async args => {
    if (!args.is_read) {
      handleReadNotification(args.id);
    }
    if (args.type === 'chat') {
      const reference = await database
        .ref(`/users/${args.fromuser.id}`)
        .once('value');
      const params = {
        full_name: args.fromuser.full_name,
        avatar: args.fromuser.avatar,
        id: args.fromuser.id,
        room: args.room,
        online: reference.val().online,
        fcm_token: args.fromuser.fcm_token,
      };
      navigation.navigate('ChatRoom', {param: params});
    } else {
      navigation.navigate('DetailThread', {
        thread: args.thread,
        totalView: total => {
          console.log(total);
        },
        totalComment: total => {
          console.log(total);
        },
      });
    }
  };

  const handleReadNotification = async notifId => {
    const response = await readNotification(notifId);
    if (response.request.status === 200) {
      console.log(response.data);
    }
  };

  return {
    loading,
    notifications,
    handleGetNotification,
    handleNavigation,
  };
};

export default useNotification;
