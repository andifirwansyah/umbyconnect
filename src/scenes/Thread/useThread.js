/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {getThreads, createThreadReaction} from 'utils';
import {useSelector, useDispatch} from 'react-redux';
const useThread = (params, navigation) => {
  const userData = useSelector(state => state.user.data);
  const [loading, setLoading] = useState(true);
  const [threads, setThreads] = useState([]);
  const [stateChanged, setStateChanged] = useState([]);
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

  return {
    loading,
    threads,
    filters,
    handleSortThreads,
    handleLoadMoreThreads,
    handleCreateReaction,
    handleNavigateThreadDetail,
    stateChanged,
    userData,
  };
};

export default useThread;
