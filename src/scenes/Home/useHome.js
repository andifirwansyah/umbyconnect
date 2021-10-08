/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {getThreads} from 'utils';
import {useSelector, useDispatch} from 'react-redux';
import {setLocalThreads} from 'actions';

const useHome = navigation => {
  const localThreads = useSelector(state => state.threads.data);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [threads, setThreads] = useState(localThreads);
  const [sortThread, setSortThread] = useState('desc');
  const [threadLimit, setThreadLimit] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetThreads();
  }, [threadLimit]);
  const handleGetThreads = async sort => {
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
    navigation.navigate('CreateThread', {
      newThread: thread => {
        const newThreads = [thread].concat(threads);
        dispatch(setLocalThreads(newThreads));
        setThreads(newThreads);
      },
    });
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
  };
};

export default useHome;
