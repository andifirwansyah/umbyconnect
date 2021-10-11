/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFaculty, updateProfile} from 'utils';
import {storeUserProfile} from 'actions';
import {Alert} from 'react-native';
const useEditProfile = navigation => {
  const userData = useSelector(state => state.user.data);
  const [loading, setLoading] = useState(false);
  const [faculty, setFaculty] = useState({
    data: [],
    selected: null,
    modal: false,
  });
  const [major, setMajor] = useState({
    data: [],
    selected: null,
    modal: false,
  });
  const [avatarModal, setAvatarModal] = useState(false);
  const [yearClass, setYearClass] = useState('');
  const [gender, setGender] = useState('');
  const [data, setData] = useState({
    full_name: userData.full_name,
    username: userData.username,
    avatar: userData.avatar,
    faculty: userData.faculty,
    major: userData.major,
    year_class: userData.year_class,
    gender: userData.gender,
    email: userData.email,
    password: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      handleGetFaculty();
    })();
  }, []);

  const handleGetFaculty = async () => {
    const response = await getFaculty();
    if (response.request.status === 200) {
      setFaculty({...faculty, data: response.data});
    } else {
      // eslint-disable-next-line prettier/prettier
      alert('Oops! Something went wrong while retrieving data, Please try again.');
    }
  };

  const handleGetMajor = async code => {
    const response = await getFaculty(code);
    if (response.request.status === 200) {
      setMajor({...major, data: response.data});
    }
  };

  const handleSaveFaculty = val => {
    userData.faculty = val.name;
    setData({...data, faculty: val.name});
    setFaculty({...faculty, modal: false, selected: val.code});
    userData.major = '';
    handleGetMajor(val.code);
  };

  const handleSaveMajor = val => {
    console.log(val);
    userData.major = val.name;
    setData({...data, major: val.name});
    setMajor({...major, modal: false});
  };

  const handleUpdateProfile = async () => {
    if (isInputEmpty()) {
      alert('Mohon lengkapi form yang telah disediakan!');
      return;
    }
    setLoading(true);
    let avatarUpload = '';
    if (!data.avatar?.uri) {
      avatarUpload = '';
    } else {
      avatarUpload = data.avatar;
    }
    const formData = new FormData();
    formData.append('full_name', data.full_name);
    formData.append('username', data.username);
    formData.append('faculty', data.faculty);
    formData.append('major', data.major);
    formData.append('year_class', data.year_class);
    formData.append('avatar', avatarUpload);
    formData.append('gender', data.gender);
    formData.append('email', data.email);
    formData.append('password', data.password);
    const response = await updateProfile(formData);
    if (response.request.status === 200) {
      dispatch(storeUserProfile(response.data));
      showAlert();
      setLoading(false);
    } else {
      alert('Oops, Something went wrong when updating profile.');
      setLoading(false);
    }
  };

  const showAlert = () => {
    Alert.alert(
      'Alert',
      'Profil Berhasil dilengkapi, sekarang kamu sudah bisa membuat thread atau berkomentar!',
      [
        {
          text: 'Terima Kasih',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
      ],
    );
  };

  const isInputEmpty = () => {
    return !(
      data.full_name &&
      data.username &&
      data.avatar &&
      data.faculty &&
      data.major &&
      data.year_class &&
      data.gender
    );
  };

  const handleCheckDataChanges = () => {
    if (
      userData.full_name !== data.full_name ||
      userData.username !== data.username ||
      userData.avatar !== data.avatar ||
      userData.faculty !== data.faculty ||
      userData.major !== data.major ||
      userData.year_class !== data.year_class ||
      userData.gender !== data.gender
    ) {
      return true;
    } else {
      return false;
    }
  };

  return {
    faculty,
    setFaculty,
    major,
    setMajor,
    handleSaveFaculty,
    handleSaveMajor,
    yearClass,
    setYearClass,
    gender,
    setGender,
    data,
    setData,
    avatarModal,
    setAvatarModal,
    handleUpdateProfile,
    loading,
    handleCheckDataChanges,
  };
};

export default useEditProfile;
