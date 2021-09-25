import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  Container,
  Icon,
  Header,
  ThreadCard,
  CreateThreadCard,
} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE_MEDIUM} barStyle="dark-content">
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <CreateThreadCard
            onPress={() => navigation.navigate('CreateThread')}
          />
          <ThreadCard />
          <ThreadCard />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;
