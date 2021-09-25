import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'components';

const ThreadCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tpHCard}>
        <Image source={require('assets/profile.jpeg')} style={styles.avatar} />
        <View style={styles.tpHCardMiddle}>
          <Text style={styles.fullName}>Suhail Kahar</Text>
          <Text style={styles.postDate}>8 hours ago</Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="dots-three-horizontal"
            type="Entypo"
            style={styles.reportIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.postTitle} numberOfLines={2}>
        Top Free React Dashboards to Use for Your Next Project
      </Text>
      <Image
        source={{
          uri: 'https://cdn.devdojo.com/posts/images/September2021/5-ways-to-fetch-api-data-in-reactjs1.jpg',
        }}
        style={styles.postImage}
      />
      <View style={styles.btHcard}>
        <View style={styles.btHFlex}>
          <View style={styles.reactionSection}>
            <TouchableOpacity style={styles.reactionBtn}>
              <Image
                source={require('assets/reaction-icon/beers.png')}
                style={styles.reactionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactionBtn}>
              <Image
                source={require('assets/reaction-icon/love.png')}
                style={styles.reactionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactionBtn}>
              <Image
                source={require('assets/reaction-icon/raised_hands.png')}
                style={styles.reactionIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.totalViewSection}>
          <Image source={require('assets/eye.png')} style={styles.viewIcon} />
          <Text style={styles.totalView}>100</Text>
        </View>
        <View style={styles.totalCommentSection}>
          <Image
            source={require('assets/comments.png')}
            style={styles.commentIcon}
          />
          <Text style={styles.totalComment}>100</Text>
        </View>
      </View>
    </View>
  );
};

export default ThreadCard;
