import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Container, Header, Icon, ModalFriend} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import useChatRoom from './useChatRoom';

const ChatRoom = ({route, navigation}) => {
  const {param} = route.params;
  const {userData, messages, onSend} = useChatRoom(param, navigation);
  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: 'white',
          },
          right: {
            backgroundColor: '#ECEFF1',
          },
        }}
      />
    );
  };
  return (
    <Container
      backgroundColor={Colors.WHITE_MEDIUM}
      barStyle="dark-content"
      barColor={Colors.WHITE}>
      <Header
        smTitle={param.full_name}
        avatar={param.avatar}
        navigation={navigation}
      />
      <View style={styles.container}>
        <GiftedChat
          messages={messages}
          renderAvatar={null}
          showUserAvatar={false}
          renderBubble={props => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  left: {
                    backgroundColor: '#e4e6eb',
                  },
                  right: {
                    backgroundColor: Colors.SECONDARY,
                  },
                }}
              />
            );
          }}
          onSend={messages => onSend(messages)}
          user={{
            _id: userData.id,
          }}
        />
      </View>
    </Container>
  );
};

export default ChatRoom;
