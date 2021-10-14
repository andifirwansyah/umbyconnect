import {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setUserAvatar, getDefaultAvatar} from 'utils';
import {storeUserProfile, setChooseAvatarStatus} from 'actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useChooseAvatar = navigation => {
  const userData = useSelector(state => state.user.data);
  const [loading, setLoading] = useState(false);
  const [imagePicker, setImagePicker] = useState(false);
  const [loadingFetch, setLoadingFetch] = useState(true);
  const [defaultAvatar, setDefaultAvatar] = useState([]);
  const [avatarSelectedIndex, setAvatarSelectedIndex] = useState(1);
  const [avatarSelectedItem, setAvatarSelectedItem] = useState({});
  const [avatarUpload, setAvatarUpload] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      handleGetDefaultAvatar();
    })();
  }, []);

  const handleGetDefaultAvatar = async () => {
    const response = await getDefaultAvatar();
    if (response.request.status === 200) {
      setDefaultAvatar(response.data);
      setAvatarSelectedItem(response.data[0]);
      setLoadingFetch(false);
    } else {
      alert('Oops! Something went wrong');
    }
  };

  const handleSetAvatar = async () => {
    setLoading(true);
    const formData = new FormData();
    if (avatarUpload?.uri) {
      let file = {
        uri: avatarUpload.uri,
        type: avatarUpload.type,
        name: avatarUpload.name,
      };
      formData.append('avatar', file);
    } else {
      formData.append('avatar', avatarSelectedItem.avatar);
    }

    const response = await setUserAvatar(formData);
    if (response.request.status === 200) {
      console.log(response.data);
      userData.avatar = response.data.avatar;
      dispatch(storeUserProfile(userData));
      dispatch(setChooseAvatarStatus(true));
      navigation.navigate('Main');
    } else {
      alert('Oops! Something went wrong');
    }
    setLoading(false);
  };

  const handleGetAvatarUploaded = val => {
    setAvatarSelectedIndex([]);
    setAvatarUpload(val);
  };

  const handleChooseAvatar = (index, item) => {
    setAvatarSelectedIndex(index + 1);
    setAvatarSelectedItem(item);
  };

  return {
    userData,
    defaultAvatar,
    loadingFetch,
    loading,
    avatarSelectedIndex,
    imagePicker,
    setImagePicker,
    avatarUpload,
    setAvatarUpload,
    handleGetAvatarUploaded,
    handleSetAvatar,
    handleChooseAvatar,
  };
};

export default useChooseAvatar;
