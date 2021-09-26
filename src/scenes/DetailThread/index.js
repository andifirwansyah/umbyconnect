import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {
  Container,
  Header,
  ThreadCard,
  CommentCard,
  CommentInput,
} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const DetailThread = ({navigation}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setKeyboardStatus(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      event => {
        setKeyboardStatus(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <Header showShare={true} navigation={navigation} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <ThreadCard
              detail
              goDetail={() => navigation.navigate('DetailThread')}
            />
            <CommentCard />
            <CommentCard />
          </View>
        </ScrollView>
        <CommentInput keyboardStatus={keyboardStatus} />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default DetailThread;
