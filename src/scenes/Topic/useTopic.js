import {useState, useEffect} from 'react';
import {getTopics} from 'utils';

const useTopic = () => {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [isFetching, setFetching] = useState(false);
  useEffect(() => {
    (async () => {
      handleGetTopics();
    })();
  }, []);

  const handleGetTopics = async () => {
    const response = await getTopics();
    if (response.request.status === 200) {
      setTopics(response.data);
    } else {
      alert('Oops, Something went wrong. Please try again');
    }
    setLoading(false);
    setFetching(false);
  };

  const handleRefreshData = () => {
    setFetching(true);
    handleGetTopics();
  };

  return {
    loading,
    topics,
    handleRefreshData,
    isFetching,
  };
};

export default useTopic;
