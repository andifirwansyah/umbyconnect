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
import {Icon, ThreadCard, ModalCompleteProfile} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useProfile from './useProfile';
import {useIsFocused} from '@react-navigation/native';

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
              <TouchableOpacity
                onPress={() => alert('Status has change to offline')}>
                <Icon
                  name="online-prediction"
                  type="MaterialIcons"
                  style={styles.headerLeftIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
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
            <Text style={styles.fullName}>
              {userdata.full_name ? userdata.full_name : 'Nama Lengkap'}
            </Text>
            <Text style={styles.major}>
              {userdata.major ? userdata.major : 'Bidang'} -{' '}
              {userdata.year_class ? userdata.year_class : '0'}
            </Text>
            <Text style={styles.bio}>{userdata.bio ? userdata.bio : '-'}</Text>
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
        <ModalCompleteProfile
          isVisible={modalFillProfile}
          onCancel={() => handleGoBack()}
          navigation={navigation}
          onAccept={() => {
            setModalFillProfile(!modalFillProfile);
            navigation.navigate('EditProfile');
          }}
          message={
            'Dengan melengkapi profil kamu, kami dapat membantu membuat rekomendasi thread yang menarik untuk kamu'
          }
        />
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Profile;
