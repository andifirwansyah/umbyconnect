import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Container, Icon, ThreadCard} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const FriendProfile = ({navigation}) => {
  return (
    <Container
      backgroundColor={Colors.WHITE_MEDIUM}
      barColor={Colors.WHITE_MEDIUM}
      barStyle="dark-content">
      <ScrollView>
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
              <Image
                source={require('assets/profile.jpeg')}
                style={styles.avatar}
              />
            </View>
            <Text style={styles.fullName}>Andi Firwansyah</Text>
            <Text style={styles.major}>Informatika - 2017</Text>
            <Text style={styles.bio}>
              Aku Selalu Konsisten Dengan Prinsip Hidup Saya, Yaitu 'Ketika
              Kehidupan Terlalu Keras Padamu, Maka Kamu Harus Lebih Keras
              Terhadap Kehiupan Itu'
            </Text>
            <View style={styles.btnActionSection}>
              <TouchableOpacity style={styles.btnChat}>
                <Icon
                  name="ios-chatbubble-ellipses-outline"
                  type="Ionicons"
                  style={styles.btnChatIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFollow}>
                <Icon
                  name="person-add-outline"
                  type="Ionicons"
                  style={styles.btnIconFollow}
                />
                <Text style={styles.btnFollowTitle}>Ikuti</Text>
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
                <Text style={styles.lastProfileTotal}>870</Text>
                <Text style={styles.lastProfileLable}>Mengkuti</Text>
              </View>
              <View style={[styles.lastProfileWrap, styles.lastProfileBorder]}>
                <Text style={styles.lastProfileTotal}>129K</Text>
                <Text style={styles.lastProfileLable}>Pengikut</Text>
              </View>
              <View style={styles.lastProfileWrap}>
                <Text style={styles.lastProfileTotal}>870</Text>
                <Text style={styles.lastProfileLable}>Thread</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.followersSection}>
            <View style={styles.tpFollower}>
              <Text style={styles.tpFollowerTitle}>Pengikut</Text>
              <Text style={styles.tpFollowerRightTitle}>Lihat Semua</Text>
            </View>
            <View style={styles.followerList}>
              <TouchableOpacity style={styles.followerItem}>
                <Image
                  source={require('assets/avatar/avatar1.png')}
                  style={styles.followerAvatar}
                />
                <Text style={styles.followerFullName}>Andi HKM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.followerItem}>
                <Image
                  source={require('assets/avatar/avatar2.png')}
                  style={styles.followerAvatar}
                />
                <Text style={styles.followerFullName}>Ahmad</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.followersSection}>
            <View style={styles.tpFollower}>
              <Text style={styles.tpFollowerTitle}>Thread</Text>
            </View>
            <ThreadCard
              goDetail={() => navigation.navigate('DetailThread')}
              goProfile={() => navigation.navigate('FriendProfile')}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default FriendProfile;
