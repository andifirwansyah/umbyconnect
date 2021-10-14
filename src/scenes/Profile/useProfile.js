/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUserThreads, createThreadReaction} from 'utils';
import {setLocalThreads} from 'actions';

const useProfile = navigation => {
  const userdata = useSelector(state => state.user.data);
  const [limit, setLimit] = useState(10);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stateChanged, setStateChanged] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetThread();
  }, [limit]);
  const handleGetThread = async () => {
    const response = await getUserThreads(userdata.id, limit);
    if (response.request.status === 200) {
      setThreads(response.data);
    }
    setLoading(false);
  };

  const handleNavigateCreateThread = () => {
    navigation.navigate('CreateThread', {
      newThread: thread => {
        const newThreads = [thread].concat(threads);
        dispatch(setLocalThreads(newThreads));
        setThreads(newThreads);
      },
    });
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

  const handleCreateReaction = async params => {
    const response = await createThreadReaction(params.id, {type: params.type});
    const thread = threads.find(val => val.id === params.id);
    if (response.request.status === 200) {
      thread.total_reaction = response.data.total;
      setStateChanged(stateChanged => [...stateChanged, thread]);
    }
  };

  return {
    userdata,
    loading,
    threads,
    setThreads,
    setLimit,
    handleNavigateCreateThread,
    handleNavigateThreadDetail,
    stateChanged,
    handleCreateReaction,
  };
};

export default useProfile;
