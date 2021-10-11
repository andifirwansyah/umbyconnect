import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from 'styles';
import styles from './styles';
const {width, height} = Dimensions.get('window');

const ModalSelection = ({data, isVisible, onSelected, title, onClose}) => {
  const handleSelectedItem = item => {
    onSelected(item);
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
      <View style={styles.section}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>{`PILIH ${title}`}</Text>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => handleSelectedItem(item)}>
                <Text style={styles.listItemName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalSelection;
