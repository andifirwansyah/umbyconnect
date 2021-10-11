import {useState, useEffect} from 'react';
import {userRegister} from 'utils';
import {useDispatch} from 'react-redux';
import {signIn, storeUserProfile} from 'actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSignUp = navigation => {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);
  const dispatch = useDispatch();

  const handleUserRegister = async () => {
    setLoading(true);
    const response = await userRegister({
      email: email,
      username: username,
      password: password,
    });
    if (response.request.status === 201) {
      await AsyncStorage.setItem('userToken', response.data.token);
      await AsyncStorage.setItem('profileCompletion', false);
      dispatch(signIn(response.data.token));
      dispatch(storeUserProfile(response.data.userdata));
    } else {
      setError(response.response.data);
    }
    setLoading(false);
  };

  const isInputEmpty = () => {
    return !(email && username && password);
  };

  return {
    loading,
    passwordVisible,
    email,
    username,
    password,
    setPasswordVisible,
    setEmail,
    setUsername,
    setPassword,
    error,
    isInputEmpty,
    handleUserRegister,
  };
};

export default useSignUp;
