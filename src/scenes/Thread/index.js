import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {Container, Header, ThreadCard} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useThread from './useThread';

const Thread = ({route, navigation}) => {
  const {params} = route.params;
  const {loading, threads, filters, handleSortThreads, handleLoadMoreThreads} =
    useThread(params);

  return (
    <Container backgroundColor={Colors.WHITE_MEDIUM} barStyle="dark-content">
      <Header
        smTitle={params.name}
        smTitleIcon={params.icon}
        showFilterUp={true}
        sortType={filters.orderBy}
        onFilter={() => handleSortThreads()}
        navigation={navigation}
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
      />
    </Container>
  );
};

export default Thread;
