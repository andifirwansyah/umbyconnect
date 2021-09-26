import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import {Icon} from 'components';
import styles from './styles';

const CommentCard = props => {
  const [reactAnimation, setReactAnimation] = useState(new Animated.Value(30));
  const [showReaction, setShowReaction] = useState(false);
  const {goProfile} = props;

  const handleShowReaction = () => {
    setShowReaction(true);
    reactAnimation.setValue(30);
    Animated.timing(reactAnimation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      reactAnimation.setValue(0);
    });
  };

  const handleReactionPressed = () => {
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
  return (
    <View style={styles.container}>
      <View style={{}}>
        <TouchableOpacity style={styles.profileSection} onPress={goProfile}>
          <Image
            source={require('assets/profile.jpeg')}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.fullName}>aditkatmch</Text>
            <Text style={styles.commentDate}>Informatika | 2 hours ago</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.commentSection}>
        <Text style={styles.comment}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without
        </Text>
      </View>
      {showReaction && (
        <Animated.View
          style={[
            styles.reactionIconWrap,
            {transform: [{translateY: reactAnimation}]},
          ]}>
          <TouchableOpacity
            style={styles.reactionIconButton}
            onPress={() => handleReactionPressed()}>
            <Image
              source={require('assets/reaction-icon/beers.png')}
              style={styles.reactionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reactionIconButton}
            onPress={() => handleReactionPressed()}>
            <Image
              source={require('assets/reaction-icon/love.png')}
              style={styles.reactionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reactionIconButton}
            onPress={() => handleReactionPressed()}>
            <Image
              source={require('assets/reaction-icon/raised_hands.png')}
              style={styles.reactionIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reactionIconButton}
            onPress={() => handleReactionPressed()}>
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
        <View style={styles.reactionCountSection}>
          <Image
            source={require('assets/reaction-icon/beers.png')}
            style={styles.reactionCountIcon}
          />
          <Text style={styles.reactionCount}>1</Text>
        </View>
      </View>
    </View>
  );
};

export default CommentCard;
