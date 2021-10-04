/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {getThreads} from 'utils';

const useHome = () => {
  const [loading, setLoading] = useState(true);
  const [threads, setThreads] = useState([]);
  const [sortThread, setSortThread] = useState('desc');
  const [threadLimit, setThreadLimit] = useState(10);
  useEffect(() => {
    handleGetThreads();
  }, [threadLimit]);

  const handleGetThreads = async sort => {
    const param = `?order_by=${!sort ? sortThread : sort}&limit=${threadLimit}`;
    const response = await getThreads(param);
    if (response.request.status === 200) {
      setThreads(response.data);
    } else {
      alert('Oops! Something went wrong');
    }
    setLoading(false);
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

  return {
    loading,
    threads,
    sortThread,
    handleSortThreads,
    handleLoadMoreThreads,
  };
};

export default useHome;
