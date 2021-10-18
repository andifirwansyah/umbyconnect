import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Container, Header, Icon, ModalFriend} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useConversation from './useConversation';
import moment from 'moment';

const Conversation = ({navigation}) => {
  const {
    userData,
    followings,
    followingModal,
    setFollowingModal,
    handleNavigateToConversation,
    conversations,
    loading,
    stateChanged,
    searchKeyword,
    handleSearchConversation,
    isFetching,
    handleRefreshData,
  } = useConversation(navigation);
  return (
    <Container
      backgroundColor={Colors.WHITE_MEDIUM}
      barStyle="dark-content"
      barColor={Colors.WHITE}>
      <Header
        lgTitle="Percakapan"
        showNotification={true}
        navigation={navigation}
        shadow={false}
        onCreateNew={() => setFollowingModal(true)}
      />
      <View style={styles.searchSection}>
        <View style={styles.searchInputSection}>
          <Icon
            name="search1"
            type="AntDesign"
            style={styles.searchInputIcon}
          />
          <TextInput
            placeholder="Cari disini"
            placeholderTextColor={Colors.GRAY_LIGHT200}
            onChangeText={val => handleSearchConversation(val)}
            value={searchKeyword}
            style={styles.searchInput}
          />
        </View>
      </View>
      {loading && (
        <ActivityIndicator
          size="small"
          color={Colors.PRIMARY}
          style={{marginTop: 20}}
        />
      )}
      {!loading && conversations.length <= 0 && (
        <DontHaveAnyChat onShowFollowing={() => setFollowingModal(true)} />
      )}
      <FlatList
        data={conversations}
        extraData={stateChanged}
        refreshing={isFetching}
        onRefresh={() => handleRefreshData()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              handleNavigateToConversation({
                full_name: item.user.full_name,
                avatar: item.user.avatar,
                id: item.user.id,
                room: item.room,
                online: item.online,
                fcm_token: item.user.fcm_token,
              })
            }
            style={styles.chatItem}>
            <View style={styles.avatarSection}>
              <Image
                source={{
                  uri: item.user.avatar,
                }}
                style={styles.avatar}
              />
              <View style={styles.onlineIndicator(item.online)} />
            </View>
            <View style={styles.chatInfo}>
              <Text numberOfLines={1} style={styles.chatName}>
                {item.user.full_name}
              </Text>
              {item?.lastMessage && (
                <Text numberOfLines={1} style={styles.chatLast}>
                  {item.senderId === userData.id ? 'Kamu: ' : ''}
                  {item.lastMessage} {' - '}
                  <Text style={styles.chatDate}>
                    {moment(item.lastSent).format('LT')}
                  </Text>
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      <ModalFriend
        data={followings}
        isVisible={followingModal}
        onSelect={val => handleNavigateToConversation(val)}
        onClose={() => setFollowingModal(false)}
      />
    </Container>
  );
};

const DontHaveAnyChat = props => (
  <View style={styles.confusedContainer}>
    <Image
      source={require('assets/confused.png')}
      style={styles.confusedIcon}
    />
    <Text style={styles.confusedTitle}>
      Oops, Kamu belum memiliki satupun percakapan!
    </Text>
    <TouchableOpacity
      style={styles.startConversationButton}
      onPress={props.onShowFollowing}>
      <Icon
        name="chatbox-ellipses"
        type="Ionicons"
        style={styles.startConversationButtonIcon}
      />
      <Text style={styles.startConversationButtonTitle}>Mulai Percakapan</Text>
    </TouchableOpacity>
  </View>
);
export default Conversation;
