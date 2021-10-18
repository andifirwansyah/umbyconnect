import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Container, Header, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useNotification from './useNotification';
import moment from 'moment';

const Notification = ({navigation}) => {
  const {loading, notifications, handleGetNotification, handleNavigation} =
    useNotification(navigation);

  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <Header smTitle={'Pemberitahuan'} navigation={navigation} />
      <View style={styles.container}>
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => index.toString()}
          refreshing={loading}
          onRefresh={() => handleGetNotification()}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() => handleNavigation(item)}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? Colors.GRAY_DARK : Colors.WHITE,
                },
                styles.notificationItem,
              ]}>
              <View style={styles.avatarSection}>
                <Image
                  source={{uri: item.fromuser.avatar}}
                  style={styles.avatar}
                />
                {item.type === 'chat' && (
                  <View
                    style={[
                      styles.notificationType,
                      {backgroundColor: Colors.DANGER},
                    ]}>
                    <Icon
                      name="mention"
                      type="Octicons"
                      style={styles.notificationTypeIcon}
                    />
                  </View>
                )}
                {item.type === 'reply' && (
                  <View
                    style={[
                      styles.notificationType,
                      {backgroundColor: '#ff8d01'},
                    ]}>
                    <Icon
                      name="message-reply-text"
                      type="MaterialCommunityIcons"
                      style={styles.notificationTypeIcon}
                    />
                  </View>
                )}
              </View>
              <View style={styles.notificationInfo}>
                <Text
                  numberOfLines={2}
                  style={styles.notificationTitle(item.is_read)}>
                  {item.title}
                </Text>
                <Text
                  numberOfLines={1}
                  style={styles.notificationContent(item.is_read)}>
                  {item.body}
                </Text>
                <Text style={styles.notificationTime}>
                  {moment(item.created_at).fromNow()}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
      {!loading && notifications.length <= 0 && <DontHaveNotification />}
    </Container>
  );
};

const DontHaveNotification = () => (
  <View style={styles.dontHaveNotificationSection}>
    <Image
      source={require('assets/no-alarm.png')}
      style={styles.dontHaveNotificationIcon}
    />
    <Text style={styles.dontHaveNotificationTitle}>
      Kamu tidak memiliki pemberitahuan
    </Text>
  </View>
);

export default Notification;
