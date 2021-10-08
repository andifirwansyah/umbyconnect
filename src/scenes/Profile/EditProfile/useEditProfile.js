import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
const useEditProfile = () => {
  const userData = useSelector(state => state.user.data);
  return {
    userData,
  };
};

export default useEditProfile;
