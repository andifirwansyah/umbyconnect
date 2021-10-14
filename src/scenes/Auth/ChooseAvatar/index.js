import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Container, ImagePicker, Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';
import useChooseAvatar from './useChooseAvatar';

const ChooseAvatar = ({navigation}) => {
  const {
    userData,
    defaultAvatar,
    loadingFetch,
    loading,
    avatarSelectedIndex,
    imagePicker,
    setImagePicker,
    avatarUpload,
    handleGetAvatarUploaded,
    handleSetAvatar,
    handleChooseAvatar,
  } = useChooseAvatar(navigation);
  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <View style={styles.flexTop}>
        <Text style={styles.scTitle}>Selamat datang,</Text>
        <Text style={styles.scSubTitle}>
          {userData !== undefined && userData.username}
        </Text>
        <Text style={styles.scNote}>
          Silahkan pilih avatar kamu terlebih dahulu!
        </Text>
      </View>
      <View style={styles.flexMiddle}>
        <View style={styles.loadAvatarSection}>
          {Object.keys(avatarUpload).length > 0 ? (
            <View
              style={styles.loadAvatar(true)}
              onPress={() => setImagePicker(true)}>
              <Image
                source={{uri: avatarUpload.uri}}
                style={styles.avatarUploaded}
              />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleGetAvatarUploaded([])}>
                <Icon
                  name="close"
                  type="AntDesign"
                  style={styles.deleteButtonIcon}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.loadAvatar(false)}
              onPress={() => setImagePicker(true)}>
              <Image
                source={require('assets/choose_avatar.png')}
                style={styles.loadAvatarIcon}
              />
            </TouchableOpacity>
          )}

          <Text style={styles.loadAvatarLable}>Load Avatar</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.midLable}>
          Atau kamu bisa milih avatar yang dibawah ini
        </Text>
        <View style={styles.flexAvatar}>
          {loadingFetch ? (
            <ActivityIndicator
              size="small"
              color={Colors.PRIMARY}
              style={{alignSelf: 'center', marginTop: 20}}
            />
          ) : (
            <FlatList
              data={defaultAvatar}
              numColumns={4}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={styles.avatarSection(
                    avatarSelectedIndex === index + 1,
                    defaultAvatar.length - 1 === index,
                  )}
                  disabled={Object.keys(avatarUpload).length > 0}
                  onPress={() => handleChooseAvatar(index, item)}>
                  <Image
                    source={{uri: item.avatar}}
                    style={styles.avatar(
                      avatarSelectedIndex === index + 1,
                      Object.keys(avatarUpload).length > 0,
                    )}
                  />
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
      <View style={styles.flexBottom}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => handleSetAvatar()}>
          {loading ? (
            <ActivityIndicator size="small" color={Colors.PRIMARY} />
          ) : (
            <Text style={styles.btnNextTitle}>Lanjutkan</Text>
          )}
        </TouchableOpacity>
      </View>
      <ImagePicker
        visible={imagePicker}
        response={val => handleGetAvatarUploaded(val)}
        onSelect={() => setImagePicker(false)}
        onClose={() => setImagePicker(false)}
      />
    </Container>
  );
};

export default ChooseAvatar;
