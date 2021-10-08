import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

const ModalCompleteProfile = ({onAccept, onCancel, isVisible, message}) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropTransitionInTiming={50}
      backdropTransitionOutTiming={50}
      animationIn="slideInUp"
      animationInTiming={300}
      hideModalContentWhileAnimating={true}
      useNativeDriverForBackdrop={true}
      useNativeDriver={true}
      onSwipeThreshold={100}
      style={styles.modalContainer}>
      <View style={styles.modalSection}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitleSection}>
            <Text style={styles.modalTitle}>Profil Kamu Belum Lengkap</Text>
          </View>
          <View style={styles.modalContentSection}>
            <Image
              source={require('assets/disappointed.png')}
              style={styles.modalIcon}
            />
            <Text style={styles.modalSubTitle}>
              Silakan lengkapi profil kamu.
            </Text>
            <Text style={styles.modalDescription}>{message}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={onAccept}>
              <Text style={styles.modalButtonTitle}>Lengkapi Sekarang!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButtonCancel}
              onPress={onCancel}>
              <Text style={styles.modalButtonCancelTitle}>Nanti Aja!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalCompleteProfile;
