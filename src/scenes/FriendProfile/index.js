/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  LogBox,
  ActivityIndicator,
} from 'react-native';
import {Container, Icon, ThreadCard} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useFriendProfile from './useFriendProfile';

const FriendProfile = ({route, navigation}) => {
  const {
    profile,
    followers,
    threads,
    handleLoadMoreThreads,
    loadingThreads,
    handleFollow,
    isFollowing,
  } = useFriendProfile(route, navigation,);
  const yearClass = profile?.year_class ? profile.year_class : '---';

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  return (
    <Container
      backgroundColor={Colors.WHITE_MEDIUM}
      barColor={Colors.WHITE_MEDIUM}
      barStyle="dark-content">
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            handleLoadMoreThreads();
          }
        }}
        scrollEventThrottle={400}>
        <View style={styles.header}>
          <View style={styles.headerSection}>
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  type="Feather"
                  style={styles.headerLeftIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity onPress={() => alert('Reported!')}>
                <Icon
                  name="dots-three-horizontal"
                  type="Entypo"
                  style={styles.headerRightIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.profileInfoSection}>
          <View style={styles.profileInfoWrap}>
            <View style={styles.avatarSection}>
              <Image source={{uri: profile.avatar}} style={styles.avatar} />
            </View>
            <Text style={styles.fullName}>{profile.full_name}</Text>
            <Text style={styles.major}>{`${profile.major} - ${yearClass
              .toString()
              .slice(-2)}`}</Text>
            <Text style={styles.bio}>{profile.bio}</Text>
            <View style={styles.btnActionSection}>
              <TouchableOpacity style={styles.btnChat}>
                <Icon
                  name="ios-chatbubble-ellipses-outline"
                  type="Ionicons"
                  style={styles.btnChatIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFollow()} style={styles.btnFollow(isFollowing)}>
                {!isFollowing && (
                  <Icon
                    name="person-add-outline"
                    type="Ionicons"
                    style={styles.btnIconFollow}
                  />
                )}
                <Text style={styles.btnFollowTitle(isFollowing)}>{isFollowing ? 'Batal Mengikuti' : 'Ikuti'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnChat}>
                <Icon
                  name="qrcode"
                  type="AntDesign"
                  style={styles.btnChatIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.lastProfileSection}>
              <View style={styles.lastProfileWrap}>
                <Text style={styles.lastProfileTotal}>{profile.following}</Text>
                <Text style={styles.lastProfileLable}>Mengkuti</Text>
              </View>
              <View style={[styles.lastProfileWrap, styles.lastProfileBorder]}>
                <Text style={styles.lastProfileTotal}>{profile.followers}</Text>
                <Text style={styles.lastProfileLable}>Pengikut</Text>
              </View>
              <View style={styles.lastProfileWrap}>
                <Text style={styles.lastProfileTotal}>
                  {profile.thread_total}
                </Text>
                <Text style={styles.lastProfileLable}>Thread</Text>
              </View>
            </View>
          </View>
          {followers.length > 0 && <View style={styles.separator} />}
          {followers.length > 0 && (
            <View style={styles.followersSection}>
              <View style={styles.tpFollower}>
                <Text style={styles.tpFollowerTitle}>Pengikut</Text>
                <Text style={styles.tpFollowerRightTitle}>Lihat Semua</Text>
              </View>
              <View style={styles.followerList}>
                <FlatList
                  data={followers}
                  horizontal={true}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <TouchableOpacity style={styles.followerItem}>
                      <Image
                        source={{uri: item.avatar}}
                        style={styles.followerAvatar}
                      />
                      <Text numberOfLines={1} style={styles.followerFullName}>
                        {item.full_name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          )}
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
                  goDetail={() => navigation.navigate('DetailThread')}
                  goProfile={() => navigation.navigate('FriendProfile')}
                />
              )}
            />
            {loadingThreads && <ActivityIndicator size="small" color={Colors.PRIMARY} style={{marginVertical: 20}}/>}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default FriendProfile;
