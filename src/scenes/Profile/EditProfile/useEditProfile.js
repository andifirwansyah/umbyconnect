/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getFaculty} from 'utils';

const useEditProfile = () => {
  const userData = useSelector(state => state.user.data);
  const [faculty, setFaculty] = useState({
    data: [],
    modal: false,
  });
  const [major, setMajor] = useState({
    data: [],
    modal: false,
  });
  const [yearClass, setYearClass] = useState('');
  const [gender, setGender] = useState('');

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
    setFaculty({...faculty, modal: false});
    handleGetMajor(val.code);
  };

  const handleSaveMajor = val => {
    console.log(val);
    userData.major = val.name;
    setMajor({...major, modal: false});
  };

  return {
    userData,
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
  };
};

export default useEditProfile;
