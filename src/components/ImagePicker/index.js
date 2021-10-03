import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import styles from './styles';
import {Icon} from 'components';
import {Colors} from 'styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

const options = {
  mediaType: 'photo',
  quality: 0,
};
const ImagePicker = props => {
  const handleTakeFromCamera = () => {
    launchCamera(options, response => {
      if (!response?.didCancel) {
        const imagePath =
          Platform.OS === 'android'
            ? response.assets[0].uri
            : response.assets[0].uri.replace('file://', '');
        ImageResizer.createResizedImage(
          imagePath,
          800,
          700,
          'JPEG',
          100,
          0,
          undefined,
          false,
          {mode: 'contain', onlyScaleDown: true},
        ).then(async compressed => {
          props.onSelect(true);
          compressed.type = response.assets[0].type;
          props.response(compressed);
        });
      } else {
        props.onSelect(true);
        props.response([]);
      }
    });
  };
  const handleTakeFromGallery = () => {
    launchImageLibrary(options, response => {
      if (!response?.didCancel) {
        const imagePath =
          Platform.OS === 'android'
            ? response.assets[0].uri
            : response.assets[0].uri.replace('file://', '');
        ImageResizer.createResizedImage(
          imagePath,
          800,
          700,
          'JPEG',
          100,
          0,
          undefined,
          false,
          {mode: 'contain', onlyScaleDown: true},
        ).then(async compressed => {
          props.onSelect(true);
          compressed.type = response.assets[0].type;
          props.response(compressed);
        });
      } else {
        props.onSelect(true);
        props.response([]);
      }
    });
  };

  return (
    <Modal
      visible={props.visible}
      transparent={true}
      statusBarTranslucent={true}
      animationType="slide">
      <View style={styles.centeredView}>
        <TouchableWithoutFeedback onPress={props.onClose}>
          <View style={{flex: 1}} />
        </TouchableWithoutFeedback>
        <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
          <Icon name="close" type="AntDesign" style={styles.closeButtonIcon} />
        </TouchableOpacity>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Pilih Opsi</Text>
          </View>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleTakeFromCamera()}>
            <View style={styles.option(Colors.DANGER)}>
              <Image
                source={require('assets/camera.png')}
                style={styles.imageOption}
              />
            </View>
            <Text style={styles.optionLable}>Kamera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleTakeFromGallery()}>
            <View style={styles.option(Colors.SUCCESS)}>
              <Image
                source={require('assets/gallery.png')}
                style={styles.imageOption}
              />
            </View>
            <Text style={styles.optionLable}>Galeri</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePicker;
