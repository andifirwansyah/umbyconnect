import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'components';
import moment from 'moment';

const ThreadCard = props => {
  const {goDetail, goProfile, detail, data} = props;
  return (
    <View style={styles.container(detail)}>
      <View style={styles.tpHCard}>
        <TouchableOpacity style={styles.tpHCardInfo} onPress={goProfile}>
          <Image source={{uri: data.user.avatar}} style={styles.avatar} />
          <View style={styles.tpHCardMiddle}>
            <Text style={styles.fullName}>{data.user.full_name}</Text>
            <Text style={styles.postDate}>
              {moment(data.created_at).startOf('day').fromNow()}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="dots-three-horizontal"
            type="Entypo"
            style={styles.reportIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goDetail}>
        <Text style={styles.postTitle} numberOfLines={2}>
          {data.title}
        </Text>
        {data.image && (
          <Image
            source={{
              uri: data.image,
            }}
            style={styles.postImage}
          />
        )}
      </TouchableOpacity>
      <View style={styles.btHcard(detail)}>
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
          <Text style={styles.totalComment}>{data.total_comment}</Text>
        </View>
      </View>
    </View>
  );
};

ThreadCard.defaultProps = {
  detail: false,
};

export default ThreadCard;
