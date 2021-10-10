import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import {Container, Header, Icon, ModalSelection} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useEditProfile from './useEditProfile';
import {Picker} from '@react-native-picker/picker';
const currentYear = new Date().getFullYear();
const GENDER = ['Laki-Laki', 'Perempuan'];
const EditProfile = ({navigation}) => {
  const {
    userData,
    faculty,
    setFaculty,
    handleSaveFaculty,
    major,
    setMajor,
    handleSaveMajor,
    yearClass,
    setYearClass,
    gender,
    setGender,
  } = useEditProfile();
  const handleGoBack = () => {
    Alert.alert('Peringatan', 'Apakah kamu ingin menyimpan perubahan?', [
      {
        text: 'Batal',
        onPress: () => navigation.goBack(),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);
  };

  const options = [];
  for (let i = 0; i <= 4; i++) {
    let yearLable = currentYear - i;
    options.push(
      <Picker.Item
        label={yearLable.toString()}
        key={i}
        value={currentYear - i}
      />,
    );
  }

  return (
    <Container backgroundColor={Colors.WHITE_MEDIUM} barStyle="dark-content">
      <Header
        smTitle={'Edit Profil'}
        navigation={navigation}
        editable
        onGoBack={() => handleGoBack()}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.avatarSection}>
            <View style={styles.avatarWrapper}>
              <Image source={{uri: userData.avatar}} style={styles.avatar} />
              <TouchableOpacity style={styles.avatarButton}>
                <Icon
                  name="camera"
                  type="Feather"
                  style={styles.avatarButtonIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <Text style={styles.userInfoLabel}>Informasi pribadi</Text>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Nama Lengkap <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={userData.full_name}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Username <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={userData.username}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Fakultas <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <Pressable onPress={() => setFaculty({...faculty, modal: true})}>
                <TextInput
                  style={styles.input}
                  value={userData.faculty}
                  editable={false}
                  underlineColorAndroid={Colors.GRAY_LIGHT100}
                />
              </Pressable>
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Jurusan/Bidang <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <Pressable onPress={() => setMajor({...major, modal: true})}>
                <TextInput
                  style={styles.input}
                  value={userData.major}
                  editable={false}
                  underlineColorAndroid={Colors.GRAY_LIGHT100}
                />
              </Pressable>
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Tahun Angkatan <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <View style={styles.inputPickerItem}>
                <Picker
                  selectedValue={yearClass}
                  style={styles.inputPicker}
                  onValueChange={value => setYearClass(value)}>
                  {options}
                </Picker>
              </View>
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>Jenis Kelamin</Text>
              <View style={styles.inputPickerItem}>
                <Picker
                  selectedValue={gender}
                  style={styles.inputPicker}
                  onValueChange={value => setGender(value)}>
                  {GENDER.map((item, index) => (
                    <Picker.Item label={item} key={index} value={item} />
                  ))}
                </Picker>
              </View>
            </View>
            <Text style={[styles.userInfoLabel, {marginTop: 20}]}>
              Informasi akun kamu
            </Text>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Alamat Email <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={userData.email}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Kata Sandi <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonSaveSection}>
        <TouchableOpacity style={styles.buttonSave}>
          <Text style={styles.buttonSaveTitle}>Simpan Perubahan</Text>
        </TouchableOpacity>
      </View>
      <ModalSelection
        data={faculty.data}
        isVisible={faculty.modal}
        onSelected={val => handleSaveFaculty(val)}
      />
      <ModalSelection
        data={major.data}
        isVisible={major.modal}
        onSelected={val => handleSaveMajor(val)}
      />
    </Container>
  );
};

export default EditProfile;
