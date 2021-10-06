import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Container, Icon, Header} from 'components';
import styles from './styles';
import {Colors} from 'styles';
import useTopic from './useTopic';

const Topic = ({navigation}) => {
  const {loading, topics, handleRefreshData, isFetching} = useTopic();
  return (
    <Container
      backgroundColor={Colors.WHITE_MEDIUM}
      barStyle="dark-content"
      barColor={Colors.WHITE}>
      <Header
        lgTitle="Topik Menarik"
        showNotification={true}
        navigation={navigation}
      />
      {loading ? (
        <ActivityIndicator
          size="small"
          color={Colors.PRIMARY}
          style={{marginVertical: 20}}
        />
      ) : (
        <FlatList
          data={topics}
          contentContainerStyle={styles.tpSection}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.tpItem}
              onPress={() => navigation.navigate('Thread', {params: item})}>
              <Image source={{uri: item.icon}} style={styles.tpIcon} />
              <View style={styles.tpInfoSection}>
                <Text style={styles.tpTitle}>{item.name}</Text>
                <Text numberOfLines={2} style={styles.tpSubTitle}>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          refreshing={isFetching}
          onRefresh={() => handleRefreshData()}
        />
      )}
    </Container>
  );
};

export default Topic;
