import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import {Icon} from 'components';
import styles from './styles';

const ModalQRCode = props => {
  const {username, isVisible, onScan, onClose} = props;
  return (
    <Modal
      isVisible={isVisible}
      backdropTransitionInTiming={50}
      backdropTransitionOutTiming={50}
      swipeDirection="down"
      onSwipeComplete={onClose}
      animationIn="slideInUp"
      animationInTiming={300}
      hideModalContentWhileAnimating={true}
      useNativeDriverForBackdrop={true}
      onBackdropPress={onClose}
      useNativeDriver={true}
      propagateSwipe={true}
      onSwipeThreshold={100}
      style={styles.container}>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.title}>My QR Code</Text>
          <Text style={styles.username}>{username}</Text>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/3/31/MM_QRcode.png',
            }}
            style={styles.qrcode}
          />
          <TouchableOpacity style={styles.btn} onPress={onScan}>
            <Icon name="scan1" type="AntDesign" style={styles.btnIcon} />
            <Text style={styles.btnTitle}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalQRCode;
