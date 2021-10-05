/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Container, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const CreateThread = ({navigation}) => {
  return (
    <Container backgroundColor={Colors.WHITE} barStyle="dark-content">
      <HeaderForAndroid onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <TextInput
            autoFocus={true}
            style={styles.titleInput}
            placeholder="Judul Thread"
          />
          <TextInput
            autoFocus={true}
            style={styles.bodyInput}
            placeholder="Tulis isi thread disini"
            returnKeyType="none"
            multiline={true}
          />
        </View>
        <View style={styles.optionSection}>
          <TouchableOpacity style={styles.optionBubbleSection}>
            <Icon name="link" type="Feather" style={styles.optionIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBubbleSection}>
            <Icon name="image" type="Feather" style={styles.optionIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBubbleSection}>
            <Icon name="tag" type="Feather" style={styles.optionIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};
export default CreateThread;

const HeaderForAndroid = props => {
  return (
    Platform.OS === 'android' && (
      <View style={styles.hdFAndroid}>
        <View style={styles.hdFAndroidSection}>
          <View style={styles.hdFAndroidLeft}>
            <TouchableOpacity
              style={styles.hdFBubleRounded}
              onPress={props.onPress}>
              <Icon
                name="arrow-left"
                type="Feather"
                style={styles.hdFBubbleIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.hdFAndroidRight}>
            <View style={styles.hdFAndroidWrap}>
              <Text style={styles.hdFAndroidPost}>POST</Text>
            </View>
          </View>
        </View>
      </View>
    )
  );
};
