/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import moment from 'moment';
import { useSelector } from 'react-redux';
const CommentCard = props => {
  const userData = useSelector(state => state.user.data);
  const [reactAnimation, setReactAnimation] = useState(new Animated.Value(30));
  const [showReaction, setShowReaction] = useState(false);
  const {goProfile, data, onReaction} = props;

  const handleShowReaction = () => {
    if (showReaction) {
      reactAnimation.setValue(0);
      Animated.timing(reactAnimation, {
        toValue: 100,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        setShowReaction(false);
        reactAnimation.setValue(100);
      });
    } else {
      setShowReaction(true);
      reactAnimation.setValue(30);
      Animated.timing(reactAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        reactAnimation.setValue(0);
      });
    }
  };

  const handleReactionPressed = (type) => {
    onReaction(type);
    reactAnimation.setValue(0);
    Animated.timing(reactAnimation, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setShowReaction(false);
      reactAnimation.setValue(100);
    });
  };

  const findIconReaction = type => {
    switch (type) {
      case 'beer':
        return (
          <Image
            source={require('assets/reaction-icon/beers.png')}
            style={styles.reactionCountIcon}
          />
        );
      case 'love':
        return (
          <Image
            source={require('assets/reaction-icon/love.png')}
            style={styles.reactionCountIcon}
          />
        );
      case 'raised_hands':
        return (
          <Image
            source={require('assets/reaction-icon/raised_hands.png')}
            style={styles.reactionCountIcon}
          />
        );
      case 'clap':
        return (
          <Image
            source={require('assets/reaction-icon/clap.png')}
            style={styles.reactionCountIcon}
          />
        );
    }
  };
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={{}}>
        <TouchableOpacity disabled={userData.username === data.user.username ? true : false} style={styles.profileSection} onPress={goProfile}>
          <Image source={{uri: data.user.avatar}} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.fullName}>
              {data.user?.full_name ? data.user.full_name : data.user.username}
            </Text>
            {data.user.major !== null ? (
              <Text style={styles.commentDate}>{`${data.user.major} | ${moment(data.created_at).fromNow()}`}</Text>
              ) : (
                <Text style={styles.commentDate}>{moment(data.created_at).fromNow()}</Text>
              )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.commentSection}>
        <Text style={styles.comment}>{data.body}</Text>
      </View>
      {showReaction && (
        <Animated.View
          style={[
            styles.reactionIconWrap,
            {transform: [{translateY: reactAnimation}]},
          ]}>
          <TouchableOpacity
            style={styles.reactionIconButton}
            onPress={() => handleReactionPressed('beer')}>
            <Image
              source={require('assets/reaction-icon/beers.png')}
              style={styles.reactionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reactionIconButton}
            onPress={() => handleReactionPressed('love')}>
            <Image
              source={require('assets/reaction-icon/love.png')}
              style={styles.reactionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reactionIconButton}
            onPress={() => handleReactionPressed('raised_hands')}>
            <Image
              source={require('assets/reaction-icon/raised_hands.png')}
              style={styles.reactionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reactionIconButton}
            onPress={() => handleReactionPressed('clap')}>
            <Image
              source={require('assets/reaction-icon/clap.png')}
              style={styles.reactionIcon}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
      <View style={styles.reactionSection}>
        <TouchableOpacity
          style={styles.btnReaction}
          onPress={() => handleShowReaction()}>
          <Icon
            name="emotsmile"
            type="SimpleLineIcons"
            style={styles.btnReactionIcon}
          />
        </TouchableOpacity>
        <FlatList
          data={data.reaction}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.reactionCountSection}>
              {findIconReaction(item.type)}
              <Text style={styles.reactionCount}>{item.total}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CommentCard;
