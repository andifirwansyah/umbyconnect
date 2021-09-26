import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';
import {Icon} from 'components';

const CommentInput = props => {
  const {keyboardStatus} = props;
  return (
    <View style={styles.container(keyboardStatus)}>
      <TouchableOpacity style={styles.linkWrap}>
        <Icon name="link" type="Feather" style={styles.linkIcon} />
      </TouchableOpacity>
      <View style={styles.inputSection}>
        <TextInput style={styles.input} placeholder="Tulis komentar kamu" />
      </View>
      <TouchableOpacity style={styles.sendWrap}>
        <Image
          source={require('assets/send-message.png')}
          style={styles.sendIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommentInput;
