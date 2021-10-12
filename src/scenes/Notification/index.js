import React from 'react';
import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import {Container, Header, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const Notification = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <Header smTitle={'Notifikasi'} navigation={navigation} />
      <View style={styles.container}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? Colors.GRAY_DARK : Colors.WHITE,
            },
            styles.notificationItem,
          ]}>
          <View style={styles.avatarSection}>
            <Image
              source={require('assets/profile.jpeg')}
              style={styles.avatar}
            />
            <View style={styles.notificationType}>
              <Icon
                name="comment-text-outline"
                type="MaterialCommunityIcons"
                style={styles.notificationTypeIcon}
              />
            </View>
          </View>
          <View style={styles.notificationInfo}>
            <Text style={styles.notificationTitle}>
              Komandan NKS mengomentari thread kamu
            </Text>
            <Text style={styles.notificationContent}>
              Weekend ini kita meeting yah.
            </Text>
            <Text style={styles.notificationTime}>1 menit yang lalu</Text>
          </View>
        </Pressable>
      </View>
    </Container>
  );
};

export default Notification;
