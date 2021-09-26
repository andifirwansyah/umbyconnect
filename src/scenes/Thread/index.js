import React from 'react';
import {View, ScrollView} from 'react-native';
import {Container, Header, ThreadCard} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const Thread = ({route, navigation}) => {
  const {params} = route.params;
  return (
    <Container backgroundColor={Colors.WHITE_MEDIUM} barStyle="dark-content">
      <Header
        smTitle={params.name}
        smTitleIcon={params.icon}
        showFilterUp={true}
        navigation={navigation}
      />
      <ScrollView>
        <View style={styles.container}>
          <ThreadCard
            goDetail={() => navigation.navigate('DetailThread')}
            goProfile={() => navigation.navigate('FriendProfile')}
          />
          <ThreadCard
            goDetail={() => navigation.navigate('DetailThread')}
            goProfile={() => navigation.navigate('FriendProfile')}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Thread;
