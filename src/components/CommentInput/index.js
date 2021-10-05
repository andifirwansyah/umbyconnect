import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Icon} from 'components';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');

const CommentInput = props => {
  const [height, setHeight] = useState(width * 0.11);
  const {onChangeText, value, onSend, loading} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.linkWrap}>
        <Icon name="link" type="Feather" style={styles.linkIcon} />
      </TouchableOpacity>
      <View style={styles.inputSection(height)}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          autoFocus={true}
          multiline={true}
          editable={!loading}
          placeholder="Tulis komentar kamu"
          onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
        />
      </View>
      <TouchableOpacity style={styles.sendWrap} onPress={onSend}>
        {loading ? (
          <ActivityIndicator size="small" color={Colors.WHITE} />
        ) : (
          <Image
            source={require('assets/send-message.png')}
            style={styles.sendIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CommentInput;
