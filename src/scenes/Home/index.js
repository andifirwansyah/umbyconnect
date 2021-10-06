import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {
  Container,
  Icon,
  Header,
  ThreadCard,
  CreateThreadCard,
} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useHome from './useHome';

const Home = ({navigation}) => {
  const {
    loading,
    threads,
    sortThread,
    handleSortThreads,
    handleLoadMoreThreads,
    handleRefreshData,
    isFetching,
  } = useHome();
  return (
    <Container backgroundColor={Colors.WHITE_MEDIUM} barStyle="dark-content">
      <Header
        showSearch={true}
        showNotification={true}
        showFilterUp={true}
        sortType={sortThread}
        onFilter={() => handleSortThreads()}
      />
      <FlatList
        data={threads}
        contentContainerStyle={styles.container}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <ThreadCard
            data={item}
            goDetail={() => navigation.navigate('DetailThread', {thread: item})}
            goProfile={() =>
              navigation.navigate('FriendProfile', {
                username: item.user.username,
                userId: item.user.id,
              })
            }
          />
        )}
        ListHeaderComponent={
          <CreateThreadCard
            onPress={() => navigation.navigate('CreateThread')}
          />
        }
        ListFooterComponent={
          loading && (
            <ActivityIndicator
              size="small"
              color={Colors.PRIMARY}
              style={{marginVertical: 20}}
            />
          )
        }
        onEndReached={() => handleLoadMoreThreads()}
        refreshing={isFetching}
        onRefresh={() => handleRefreshData()}
      />
    </Container>
  );
};

export default Home;
