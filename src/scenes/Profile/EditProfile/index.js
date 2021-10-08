import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {Container, Header, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useEditProfile from './useEditProfile';

const EditProfile = ({navigation}) => {
  const {userData} = useEditProfile();
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
              <TextInput
                style={styles.input}
                value={userData.faculty}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Jurusan/Bidang <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={userData.major}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>
                Tahun Angkatan <Text style={{color: Colors.DANGER}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={userData.year_class}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.inputLabel}>Jenis Kelamin</Text>
              <TextInput
                style={styles.input}
                value={userData.year_class}
                underlineColorAndroid={Colors.GRAY_LIGHT100}
              />
            </View>
            <Text style={styles.userInfoLabel}>Informasi akun kamu</Text>
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
    </Container>
  );
};

export default EditProfile;
