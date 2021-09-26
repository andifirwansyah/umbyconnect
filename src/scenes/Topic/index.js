import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {Container, Icon, Header} from 'components';
import styles from './styles';
import {Colors} from 'styles';
const CHOOSE_TOPICS = [
  {
    icon: require('assets/topics/graduate.png'),
    name: 'Kampus',
    lable: 'Topik mengenai kampus',
  },
  {
    icon: require('assets/topics/community-manager.png'),
    name: 'Komunitas',
    lable: 'Ada banyak pembahasan tentang komunitas disini',
  },
  {
    icon: require('assets/topics/slight-smile.png'),
    name: 'Curhat',
    lable: 'Banyak cerita yang sama dengan ceritamu disini',
  },
  {
    icon: require('assets/topics/laughing.png'),
    name: 'Jokes',
    lable: 'Balikin mood dengan baca2 jokes disini',
  },
  {
    icon: require('assets/topics/person.png'),
    name: 'Olahraga',
    lable: 'Mampir disini kalau kamu suka olahraga',
  },
  {
    icon: require('assets/topics/learning-idea.png'),
    name: 'Pelajaran atau Tugas',
    lable: 'Diskusikan pelajaran kamu disini',
  },
];
const Topic = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE_MEDIUM} barStyle="dark-content">
      <Header
        lgTitle="Topik Menarik"
        showNotification={true}
        navigation={navigation}
      />
      <View style={styles.tpSection}>
        <FlatList
          data={CHOOSE_TOPICS}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.tpItem}
              onPress={() => navigation.navigate('Thread', {params: item})}>
              <Image source={item.icon} style={styles.tpIcon} />
              <View style={styles.tpInfoSection}>
                <Text style={styles.tpTitle}>{item.name}</Text>
                <Text numberOfLines={2} style={styles.tpSubTitle}>
                  {item.lable}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
};

export default Topic;
