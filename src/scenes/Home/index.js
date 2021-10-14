import React from 'react';
import {View, ActivityIndicator, FlatList, Dimensions} from 'react-native';
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
const {width} = Dimensions.get('window');

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
    handleCreateReaction,
    stateChanged,
    handleNavigateThreadDetail,
    userData,
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
        navigation={navigation}
      />
      <FlatList
        data={threads}
        extraData={stateChanged}
        contentContainerStyle={styles.container}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <ThreadCard
            data={item}
            goDetail={() => handleNavigateThreadDetail(item)}
            onReaction={val => handleCreateReaction(val)}
            disableProfile={
              item.user.username === userData.username ? true : false
            }
            goProfile={() =>
              navigation.navigate('FriendProfile', {
                username: item.user.username,
                userId: item.user.id,
              })
            }
          />
        )}
        ListHeaderComponent={
          <View style={{marginTop: width * 0.04}}>
            <CreateThreadCard onPress={() => handleNavigateCreateThread()} />
          </View>
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
