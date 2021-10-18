/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {
  getThreads,
  createThreadReaction,
  trackUserOnline,
  updateFcmToken,
} from 'utils';
import {useSelector, useDispatch} from 'react-redux';
import {setLocalThreads} from 'actions';
import PushNotification from 'react-native-push-notification';

const useHome = navigation => {
  const localThreads = useSelector(state => state.threads.data);
  const userData = useSelector(state => state.user.data);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [threads, setThreads] = useState(localThreads);
  const [sortThread, setSortThread] = useState('desc');
  const [threadLimit, setThreadLimit] = useState(10);
  const [modalCompletion, setModalCompletion] = useState(false);
  const [stateChanged, setStateChanged] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    trackUserOnline(userData.id);
    handleGetThreads();
    handleStoreFcmToken();
  }, [threadLimit]);
  const handleGetThreads = async sort => {
    setLoading(localThreads.length > 0 ? false : true);
    const param = `?order_by=${!sort ? sortThread : sort}&limit=${threadLimit}`;
    const response = await getThreads(param);
    if (response.request.status === 200) {
      setThreads(response.data);
      dispatch(setLocalThreads(response.data));
    } else {
      alert('Oops! Something went wrong');
    }
    setLoading(false);
    setIsFetching(false);
  };

  const handleSortThreads = () => {
    setThreadLimit(10);
    if (sortThread === 'desc') {
      setSortThread('asc');
      handleGetThreads('asc');
    } else {
      setSortThread('desc');
      handleGetThreads('desc');
    }
  };

  const handleLoadMoreThreads = () => {
    if (threads.length > 5) {
      setLoading(true);
      setThreadLimit(threadLimit + 10);
    }
  };

  const handleRefreshData = () => {
    setIsFetching(true);
    handleGetThreads();
  };

  const handleNavigateCreateThread = () => {
    if (!userData.full_name) {
      setModalCompletion(true);
    } else {
      navigation.navigate('CreateThread', {
        newThread: thread => {
          const newThreads = [thread].concat(threads);
          dispatch(setLocalThreads(newThreads));
          setThreads(newThreads);
        },
      });
    }
  };

  const handleCreateReaction = async params => {
    const response = await createThreadReaction(params.id, {type: params.type});
    const thread = threads.find(val => val.id === params.id);
    if (response.request.status === 200) {
      thread.total_reaction = response.data.total;
      setStateChanged(stateChanged => [...stateChanged, thread]);
    }
  };

  const handleNavigateThreadDetail = item => {
    navigation.navigate('DetailThread', {
      thread: item,
      totalView: total => {
        const thread = threads.find(val => val.id === item.id);
        thread.total_view = total;
        setStateChanged(stateChanged => [...stateChanged, thread]);
      },
      totalComment: total => {
        const thread = threads.find(val => val.id === item.id);
        thread.total_comment = total;
        setStateChanged(stateChanged => [...stateChanged, thread]);
      },
    });
  };

  const handleStoreFcmToken = () => {
    PushNotification.configure({
      onRegister: function (token) {
        handleUpdateFcmToken(token.token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        handleDisplayNotification(notification);
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
      },
      largeIcon: 'notification_icon',
      smallIcon: 'notification_icon',
      popInitialNotification: true,
      requestPermissions: true,
    });
    PushNotification.createChannel(
      {
        channelId: 'conversation', // (required)
        channelName: 'conversation', // (required)
      },
      created => console.log(`CreateChannel returned '${created}'`),
    );
  };

  const handleDisplayNotification = notification => {
    PushNotification.localNotification({
      channelId: 'conversation',
      priority: 'high',
      largeIcon: 'notification_icon',
      smallIcon: 'notification_icon',
      title: notification.title,
      message: notification.message,
    });
  };

  const handleUpdateFcmToken = async fcmToken => {
    const response = await updateFcmToken({fcm_token: fcmToken});
    if (response.request.status === 200) {
      console.log('FCM TOKEN HAS BEEN STORED => ', response.data.fcm_token);
    }
  };

  return {
    loading,
    threads,
    sortThread,
    handleSortThreads,
    handleLoadMoreThreads,
    handleRefreshData,
    isFetching,
    handleNavigateCreateThread,
    modalCompletion,
    setModalCompletion,
    handleCreateReaction,
    stateChanged,
    handleNavigateThreadDetail,
    userData,
  };
};

export default useHome;
