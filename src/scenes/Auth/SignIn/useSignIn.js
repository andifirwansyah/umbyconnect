import {useState, useEffect} from 'react';
import {userLogin} from 'utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {signIn} from 'actions';

const useSignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleUserLogin = async () => {
    setLoading(true);
    setError('');
    const response = await userLogin({
      email: email,
      password: password,
    });
    if (response.request.status === 200) {
      await AsyncStorage.setItem('userToken', response.data.access_token);
      dispatch(signIn(response.data.access_token));
    } else {
      setError(response.response.data.message);
    }
    setLoading(false);
  };

  const isInputEmpty = () => {
    return !(email && password);
  };

  return {
    loading,
    email,
    password,
    passwordVisible,
    setEmail,
    setPassword,
    setPasswordVisible,
    handleUserLogin,
    isInputEmpty,
    error,
  };
};

export default useSignIn;
