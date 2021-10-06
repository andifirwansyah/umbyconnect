/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {
  getFriendProfile,
  getUserFollowers,
  getUserThreads,
  followUser,
} from 'utils';

const useFriendProfile = (route, navigation) => {
  const {username, userId} = route.params;
  const [profile, setProfile] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [threads, setThreads] = useState([]);
  const [threadsLimit, setThreadsLimit] = useState(5);
  const [loadingThreads, setLoadingThreads] = useState(true);
  const [isFollowing, setFollowing] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    (async () => {
      handleGetFollowers();
    })();
  }, []);

  useEffect(() => {
    handleGetUserProfile();
  }, [isFollowing]);

  useEffect(() => {
    handleGetThreads();
  }, [threadsLimit]);

  const handleGetUserProfile = async () => {
    const response = await getFriendProfile(username);
    if (response.request.status === 200) {
      setProfile(response.data);
      setFollowing(response.data.isFollow);
    } else {
      alert('Oops, Something went wrong');
    }
  };

  const handleGetFollowers = async () => {
    const response = await getUserFollowers(userId);
    if (response.request.status === 200) {
      setFollowers(response.data);
    }
  };

  const handleGetThreads = async () => {
    const response = await getUserThreads(userId, threadsLimit);
    if (response.request.status === 200) {
      setThreads(response.data);
    }
    setLoadingThreads(false);
  };

  const handleLoadMoreThreads = () => {
    setLoadingThreads(true);
    setThreadsLimit(threadsLimit + 5);
  };

  const handleFollow = async () => {
    const response = await followUser(userId);
    setFollowing(response.data.isFollow);
  };

  return {
    profile,
    followers,
    threads,
    handleLoadMoreThreads,
    loadingThreads,
    handleFollow,
    isFollowing,
    showQRCode,
    setShowQRCode,
  };
};

export default useFriendProfile;
