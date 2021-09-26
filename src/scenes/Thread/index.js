import React from 'react';
import {View, Text} from 'react-native';
import {Container, Icon, Header} from 'components';
import {Colors} from 'styles';

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
    </Container>
  );
};

export default Thread;
