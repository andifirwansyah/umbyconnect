/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {Icon} from 'components';
const {width, height} = Dimensions.get('window');
import {Colors} from 'styles';
import styles from './styles';
import {firebase} from '@react-native-firebase/database';
// eslint-disable-next-line prettier/prettier
const database = firebase.app().database('https://umbyforum-9309b-default-rtdb.asia-southeast1.firebasedatabase.app');

const ModalFriend = props => {
  const {isVisible, onClose, data, onSelect} = props;
  const [dataState, setDataState] = useState([]);
  const [dataSearched, setDataSearched] = useState(props.data);

  useEffect(() => {
    (async () => {
      handleGetUserOnlineStatus();
    })();
  }, []);

  const handleGetUserOnlineStatus = async () => {
    for (const val of data) {
      database.ref(`/users/${val.id}`).on('value', snapshot => {
        val.online = snapshot.val().online;
        setDataState(dataState => [...dataState, val]);
      });
    }
  };

  const handleSearchUser = keyword => {
    const newData = data.filter(item => {
      const itemData = `${item.full_name.toUpperCase()}`;
      const inputKeyword = keyword.toUpperCase();
      return itemData.indexOf(inputKeyword) > -1;
    });
    setDataSearched(newData);
  };

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.8}
      backdropColor={Colors.PRIMARY_MATE}
      deviceHeight={height}
      deviceWidth={width}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      propagateSwipe={true}
      onBackdropPress={onClose}
      style={styles.container}>
      <View style={styles.contentView}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <TouchableOpacity
              style={styles.contentHeaderBtnCancel}
              onPress={onClose}>
              <Text style={styles.contentHeaderBtnCancelTitle}>Batal</Text>
            </TouchableOpacity>
            <Text style={styles.contentTitle}>Percakapan Baru</Text>
            <TouchableOpacity disabled style={styles.contentHeaderBtnCancel}>
              <Icon
                name="users"
                type="Feather"
                style={styles.contentHeaderBtnIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchBoxInput}
              placeholder="Cari orang yang kamu ikuti"
              onChangeText={val => handleSearchUser(val)}
              placeholderTextColor={Colors.BLACK_LIGHT}
            />
          </View>
          <FlatList
            data={dataSearched}
            extraData={dataState}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => onSelect(item)}>
                <View style={styles.avatarSection}>
                  <Image source={{uri: item.avatar}} style={styles.avatar} />
                  <View style={styles.userIndicator(item.online)} />
                </View>
                <View style={styles.listItemInfo}>
                  <Text style={styles.listItemName}>{item.full_name}</Text>
                  <Text style={styles.listItemUsername}>
                    {'@' + item.username}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalFriend;
