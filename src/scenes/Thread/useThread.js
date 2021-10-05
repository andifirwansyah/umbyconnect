/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {getThreads} from 'utils';

const useThread = params => {
  const [loading, setLoading] = useState(true);
  const [threads, setThreads] = useState([]);
  const [filters, setFilters] = useState({
    topicId: params.id,
    orderBy: 'desc',
    limit: 10,
  });
  useEffect(() => {
    handleGetThreads();
  }, [filters.limit]);

  const handleGetThreads = async () => {
    console.log(filters);
    const param = `?topic=${filters.topicId}&order_by=${filters.orderBy}&limit=${filters.limit}`;
    const response = await getThreads(param);
    if (response.request.status === 200) {
      setThreads(response.data);
    } else {
      alert('Oops, Something went wrong. Please try again');
    }
    setLoading(false);
  };

  const handleSortThreads = () => {
    filters.limit = 10;
    if (filters.orderBy === 'desc') {
      filters.orderBy = 'asc';
      setFilters(filters);
      handleGetThreads();
    } else {
      filters.orderBy = 'desc';
      setFilters(filters);
      handleGetThreads();
    }
  };

  const handleLoadMoreThreads = () => {
    if (threads.length > 10) {
      setLoading(true);
      filters.limit += 5;
      setFilters(filters);
    }
  };

  return {
    loading,
    threads,
    filters,
    handleSortThreads,
    handleLoadMoreThreads,
  };
};

export default useThread;
