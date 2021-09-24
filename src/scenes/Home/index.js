import React from 'react';
import {View, Text} from 'react-native';
import {Container, Icon, Header} from 'components';
import {Colors} from 'styles';

const Home = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <Header />
    </Container>
  );
};

export default Home;
