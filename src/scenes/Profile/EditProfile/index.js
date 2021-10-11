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
  ActivityIndicator,
} from 'react-native';
import {Container, Header, Icon, ModalSelection, ImagePicker} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useEditProfile from './useEditProfile';
import {Picker} from '@react-native-picker/picker';
const currentYear = new Date().getFullYear();
const GENDER = ['Laki-Laki', 'Perempuan'];
const EditProfile = ({navigation}) => {
  const [pickerFocused, setPickerFocused] = React.useState(false);
  const {
    faculty,
    setFaculty,
    handleSaveFaculty,
    major,
    setMajor,
    handleSaveMajor,
    data,
    setData,
    avatarModal,
    setAvatarModal,
    handleUpdateProfile,
    loading,
    handleCheckDataChanges,
  } = useEditProfile(navigation);
  const handleGoBack = () => {
    if (handleCheckDataChanges()) {
      Alert.alert('Peringatan', 'Apakah kamu ingin menyimpan perubahan?', [
        {
          text: 'Tidak',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
        {text: 'YA', onPress: () => handleUpdateProfile()},
      ]);
    } else {
      navigation.goBack();
    }
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
              <Image
                source={{uri: data.avatar?.uri ? data.avatar.uri : data.avatar}}
                style={styles.avatar}
              />
              <TouchableOpacity
                style={styles.avatarButton}
                disabled={loading}
                onPress={() => setAvatarModal(true)}>
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
                value={data.full_name}
                editable={!loading}
                onChangeText={val => setData({...data, full_name: val})}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Username <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={data.username}
                editable={!loading}
                onChangeText={val => setData({...data, username: val})}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Fakultas <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <Pressable
                disabled={loading}
                onPress={() => setFaculty({...faculty, modal: true})}>
                <TextInput
                  style={styles.input}
                  value={data.faculty}
                  editable={false}
                  underlineColorAndroid={Colors.GRAY_LIGHT100}
                />
              </Pressable>
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Jurusan/Bidang <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <Pressable
                disabled={faculty.selected ? loading : true}
                onPress={() => setMajor({...major, modal: true})}>
                <TextInput
                  style={styles.input}
                  value={data.major}
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
                  selectedValue={data.year_class}
                  style={styles.inputPicker}
                  onFocus={() => setPickerFocused(true)}
                  onBlur={() => setPickerFocused(false)}
                  enabled={!loading}
                  onValueChange={val => setData({...data, year_class: val})}>
                  <Picker.Item
                    label="Angkatan"
                    style={{color: Colors.GRAY_LIGHT200}}
                    enabled={!pickerFocused}
                    value={0}
                  />
                  {options}
                </Picker>
              </View>
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>Jenis Kelamin</Text>
              <View style={styles.inputPickerItem}>
                <Picker
                  selectedValue={data.gender}
                  style={styles.inputPicker}
                  onFocus={() => setPickerFocused(true)}
                  onBlur={() => setPickerFocused(false)}
                  enabled={!loading}
                  onValueChange={val => setData({...data, gender: val})}>
                  <Picker.Item
                    label="Jenis Kelamin"
                    style={{color: Colors.GRAY_LIGHT200}}
                    enabled={!pickerFocused}
                    value={0}
                  />
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
                value={data.email}
                editable={!loading}
                onChangeText={val => setData({...data, email: val})}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Kata Sandi <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                editable={!loading}
                onChangeText={val => setData({...data, password: val})}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonSaveSection}>
        <TouchableOpacity
          style={styles.buttonSave(handleCheckDataChanges())}
          disabled={handleCheckDataChanges() ? false : true}
          onPress={() => handleUpdateProfile()}>
          {loading ? (
            <ActivityIndicator size="small" color={Colors.WHITE} />
          ) : (
            <Text style={styles.buttonSaveTitle}>Simpan Perubahan</Text>
          )}
        </TouchableOpacity>
      </View>
      <ModalSelection
        data={faculty.data}
        isVisible={faculty.modal}
        title="FAKULTAS"
        onClose={() => setFaculty({...faculty, modal: false})}
        onSelected={val => handleSaveFaculty(val)}
      />
      <ModalSelection
        data={major.data}
        isVisible={major.modal}
        title="PILIH JURUSAN/BIDANG"
        onClose={() => setMajor({...major, modal: false})}
        onSelected={val => handleSaveMajor(val)}
      />
      <ImagePicker
        visible={avatarModal}
        response={val =>
          setData({
            ...data,
            avatar: {uri: val.uri, type: val.type, name: val.name},
          })
        }
        onSelect={() => setAvatarModal(false)}
        onClose={() => setAvatarModal(false)}
      />
    </Container>
  );
};

export default EditProfile;
