/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  LogBox,
} from 'react-native';
import {ModalQRCode, Icon, ThreadCard} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import useProfile from './useProfile';
import {useIsFocused} from '@react-navigation/native';
import Modal from 'react-native-modal';
const Profile = ({navigation}) => {
  const isFocused = useIsFocused();
  const {userdata, loading, threads} = useProfile();
  const [modalFillProfile, setModalFillProfile] = useState(false);
  const yearClass = userdata?.year_class ? userdata.year_class : '---';

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!userdata.full_name) {
        setModalFillProfile(true);
      }
    });

    return unsubscribe;
  }, [navigation]);
  const handleGoBack = () => {
    setModalFillProfile(!modalFillProfile);
    setTimeout(() => {
      navigation.goBack();
    }, 100);
  };
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          source={{uri: userdata.avatar}}
          blurRadius={20}
          style={styles.header}>
          <StatusBar
            barStyle={isFocused ? 'light-content' : 'dark-content'}
            backgroundColor={isFocused ? 'transparent' : Colors.WHITE}
          />
          <View style={styles.headerSection}>
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="online-prediction"
                  type="MaterialIcons"
                  style={styles.headerLeftIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity onPress={() => alert('Reported!')}>
                <Icon
                  name="setting"
                  type="AntDesign"
                  style={styles.headerRightIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.profileInfoSection}>
          <View style={styles.profileInfoWrap}>
            <View style={styles.avatarSection}>
              <Image source={{uri: userdata.avatar}} style={styles.avatar} />
            </View>
            <Text style={styles.fullName}>{'Andi Firwansyah'}</Text>
            <Text style={styles.major}>Informatika - 17</Text>
            <Text style={styles.bio}>Apa urusan anda melihat akun saya?</Text>
            <View style={styles.lastProfileSection}>
              <View style={styles.lastProfileWrap}>
                <Text style={styles.lastProfileTotal}>
                  {userdata.following}
                </Text>
                <Text style={styles.lastProfileLable}>Mengkuti</Text>
              </View>
              <View style={[styles.lastProfileWrap, styles.lastProfileBorder]}>
                <Text style={styles.lastProfileTotal}>
                  {userdata.followers}
                </Text>
                <Text style={styles.lastProfileLable}>Pengikut</Text>
              </View>
              <View style={styles.lastProfileWrap}>
                <Text style={styles.lastProfileTotal}>
                  {userdata.thread_total}
                </Text>
                <Text style={styles.lastProfileLable}>Thread</Text>
              </View>
            </View>
          </View>

          <View style={styles.separator} />
          <View style={styles.followersSection}>
            <View style={styles.tpFollower}>
              <Text style={styles.tpFollowerTitle}>Thread</Text>
            </View>
            <FlatList
              data={threads}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <ThreadCard
                  data={item}
                  goDetail={() =>
                    navigation.navigate('DetailThread', {thread: item})
                  }
                  disableProfile={true}
                />
              )}
              ListFooterComponent={
                threads.length === 0 && (
                  <View style={styles.noThreadsSection}>
                    <Image
                      source={require('assets/scared.png')}
                      style={styles.scaredIcon}
                    />
                    <Text style={styles.noThreadsTitle}>
                      Kamu belum berbagi cerita, yuk buat thread sekarang
                    </Text>
                  </View>
                )
              }
            />
            {loading && (
              <ActivityIndicator
                size="small"
                color={Colors.PRIMARY}
                style={{marginVertical: 20}}
              />
            )}
          </View>
        </View>
      </ScrollView>
      <Modal isVisible={modalFillProfile} style={styles.modalContainer}>
        <View style={styles.modalSection}>
          <View style={styles.modalContent}>
            <View style={styles.modalTitleSection}>
              <Text style={styles.modalTitle}>Lengkapi Profil Kamu</Text>
            </View>
            <View style={styles.modalContentSection}>
              <Image
                source={require('assets/disappointed.png')}
                style={styles.modalIcon}
              />
              <Text style={styles.modalSubTitle}>
                Silakan lengkapi profil Anda.
              </Text>
              <Text style={styles.modalDescription}>
                Dengan melengkapi profil kamu, kami dapat membuat rekomendasi
                thread yang menarik untuk kamu
              </Text>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonTitle}>Lengkapi Sekarang!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonCancel}
                onPress={() => handleGoBack()}>
                <Text style={styles.modalButtonCancelTitle}>Nanti Aja!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaProvider>
  );
};

export default Profile;
