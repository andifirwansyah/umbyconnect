/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getUserThreads} from 'utils';

const useProfile = () => {
  const userdata = useSelector(state => state.user.data);
  const [limit, setLimit] = useState(10);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return {
    userdata,
    loading,
    threads,
  };
};

export default useProfile;
