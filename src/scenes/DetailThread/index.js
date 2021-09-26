import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Container, Icon, Header, ThreadCard} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const DetailThread = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <Header showShare={true} navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <ThreadCard
            detail
            goDetail={() => navigation.navigate('DetailThread')}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default DetailThread;
