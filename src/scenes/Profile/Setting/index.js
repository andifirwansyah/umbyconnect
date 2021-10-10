import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Switch,
} from 'react-native';
import {Container, Header, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const MENU_LIST = [
  {
    key: 1,
    name: 'Edit Personal Akun',
    icon: require('assets/menu-icon/account.png'),
    route: 'EditProfile',
  },
  {
    key: 2,
    name: 'Push Notification',
    icon: require('assets/menu-icon/notification.png'),
    route: '',
  },
  {
    key: 3,
    name: 'Laporkan Masalah',
    icon: require('assets/menu-icon/bug.png'),
    route: '',
  },
  {
    key: 4,
    name: 'Tentang Pengembang',
    icon: require('assets/menu-icon/developer.png'),
    route: '',
  },
  {
    key: 5,
    name: 'Beri Penilaian',
    icon: require('assets/menu-icon/review.png'),
    route: '',
  },
  {
    key: 5,
    name: 'Dukungan/Donasi',
    icon: require('assets/menu-icon/review.png'),
    route: '',
  },
  {
    key: 6,
    name: 'Keluar',
    icon: require('assets/menu-icon/logout.png'),
    route: '',
  },
];

const Setting = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Container backgroundColor={Colors.WHITE_MEDIUM} barStyle="dark-content">
      <Header smTitle={'Pengaturan'} navigation={navigation} />
      <View style={styles.container}>
        <FlatList
          data={MENU_LIST}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              disabled={item.key === 2 ? true : false}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.route)}>
              <Image source={item.icon} style={styles.menuIcon} />
              <Text numberOfLines={1} style={styles.menuTitle}>
                {item.name}
              </Text>
              {item.key === 2 && (
                <Switch
                  trackColor={{false: '#767577', true: Colors.SECONDARY}}
                  thumbColor={'#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
};

export default Setting;
