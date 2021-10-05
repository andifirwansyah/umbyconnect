import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {
  Container,
  Header,
  ThreadCard,
  CommentCard,
  CommentInput,
} from 'components';
import styles from './styles';
import {Colors} from 'styles';
import useDetailThread from './useDetailThread';

const DetailThread = ({route, navigation}) => {
  const {thread} = route.params;
  const {
    loading,
    comments,
    handleLoadMoreComment,
    comment,
    setComment,
    handleSendComment,
    loadingSend,
    handleReactionThread,
  } = useDetailThread(thread.id);

  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <Header showShare={true} navigation={navigation} />
      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <CommentCard
            onReaction={val => handleReactionThread(val, item.id)}
            data={item}
          />
        )}
        ListHeaderComponent={
          <>
            <ThreadCard
              detail
              data={thread}
              commentTotal={comments.length}
              goDetail={() => navigation.navigate('DetailThread')}
            />
            {loading && (
              <ActivityIndicator size="small" color={Colors.PRIMAR} />
            )}
          </>
        }
        ListFooterComponent={() =>
          !loading &&
          comments.length === 0 && (
            <View style={styles.noComment}>
              <Text style={styles.noCommentLable}>Belum ada komentar.</Text>
            </View>
          )
        }
        onEndReached={() => handleLoadMoreComment()}
        onEndReachedThreshold={0}
      />
      <CommentInput
        onChangeText={val => setComment(val)}
        value={comment}
        loading={loadingSend}
        onSend={() => handleSendComment()}
      />
    </Container>
  );
};

export default DetailThread;
