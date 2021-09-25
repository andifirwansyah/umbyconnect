import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const CreateThreadCard = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <View style={styles.bubleRadiusIcon}>
      <Image source={require('assets/create.png')} style={styles.createIcon} />
    </View>
    <Text style={styles.label}>Bikin thread disini</Text>
  </TouchableOpacity>
);

export default CreateThreadCard;
