import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Container, Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const CHOOSE_AVATAR = [
  {
    key: 1,
    avatar: require('assets/avatar/avatar1.png'),
  },
  {
    key: 2,
    avatar: require('assets/avatar/avatar2.png'),
  },
  {
    key: 3,
    avatar: require('assets/avatar/avatar3.png'),
  },
  {
    key: 4,
    avatar: require('assets/avatar/avatar4.png'),
  },
  {
    key: 5,
    avatar: require('assets/avatar/avatar5.png'),
  },
  {
    key: 6,
    avatar: require('assets/avatar/avatar6.png'),
  },
  {
    key: 7,
    avatar: require('assets/avatar/avatar7.png'),
  },
  {
    key: 8,
    avatar: require('assets/avatar/avatar8.png'),
  },
  {
    key: 9,
    avatar: require('assets/avatar/avatar9.png'),
  },
  {
    key: 10,
    avatar: require('assets/avatar/avatar10.png'),
  },
  {
    key: 11,
    avatar: require('assets/avatar/avatar11.png'),
  },
  {
    key: 12,
    avatar: require('assets/avatar/avatar12.png'),
  },
];

const ChooseAvatar = ({navigation}) => {
  const [avatarSelected, setAvatarSelected] = useState([]);
  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <View style={styles.flexTop}>
        <Text style={styles.scTitle}>Selamat datang,</Text>
        <Text style={styles.scSubTitle}>Barago</Text>
        <Text style={styles.scNote}>
          Silahkan pilih avatar kamu terlebih dahulu!
        </Text>
      </View>
      <View style={styles.flexMiddle}>
        <View style={styles.loadAvatarSection}>
          <TouchableOpacity style={styles.loadAvatar}>
            <Image
              source={require('assets/choose_avatar.png')}
              style={styles.loadAvatarIcon}
            />
          </TouchableOpacity>
          <Text style={styles.loadAvatarLable}>Load Avatar</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.midLable}>
          Atau kamu bisa milih avatar yang dibawah ini
        </Text>
        <View style={styles.flexAvatar}>
          <FlatList
            data={CHOOSE_AVATAR}
            numColumns={4}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.avatarSection(
                  avatarSelected === index + 1,
                  CHOOSE_AVATAR.length - 1 === index,
                )}
                onPress={() => setAvatarSelected(index + 1)}>
                <Image
                  source={item.avatar}
                  style={styles.avatar(avatarSelected === index + 1)}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View style={styles.flexBottom}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.navigate('App')}>
          <Text style={styles.btnNextTitle}>Lanjutkan</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ChooseAvatar;
