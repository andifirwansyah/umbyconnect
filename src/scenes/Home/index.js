import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {
  Container,
  Header,
  ThreadCard,
  CreateThreadCard,
  ModalCompleteProfile,
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
    handleNavigateCreateThread,
    modalCompletion,
    setModalCompletion,
  } = useHome(navigation);

  return (
    <Container
      backgroundColor={Colors.WHITE_MEDIUM}
      barStyle="dark-content"
      barColor={Colors.WHITE}>
      <Header
        showSearch={true}
        showNotification={true}
        showFilterUp={true}
        sortType={sortThread}
        onFilter={() => handleSortThreads()}
      />
      <FlatList
        data={threads}
        extraData={threads}
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
          <CreateThreadCard onPress={() => handleNavigateCreateThread()} />
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
      <ModalCompleteProfile
        isVisible={modalCompletion}
        onCancel={() => setModalCompletion(false)}
        navigation={navigation}
        onAccept={() => {
          setModalCompletion(!modalCompletion);
          navigation.navigate('EditProfile');
        }}
        message="Saat ini kamu belum dapat membuat thread, Mohon lengkapi profil kamu terlebih dahulu dan kembali lagi."
      />
    </Container>
  );
};

export default Home;
