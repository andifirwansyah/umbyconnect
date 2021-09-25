/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
  Dimensions,
} from 'react-native';
import {Container, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';
const {width} = Dimensions.get('window');

const CreateThread = ({navigation}) => {
  const [optionHeight, setOptionHeight] = useState(new Animated.Value(50));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        console.log(event.endCoordinates);
        Animated.timing(optionHeight, {
          duration: event.duration,
          toValue: event.endCoordinates.height,
        }).start();
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      event => {
        Animated.timing(optionHeight, {
          duration: event.duration,
          toValue: 0,
        }).start();
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
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
        <KeyboardAvoidingView behavior="padding">
          <Animated.View style={[styles.optionSection, {bottom: optionHeight}]}>
            <TouchableOpacity style={styles.optionBubbleSection}>
              <Icon name="link" type="Feather" style={styles.optionIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBubbleSection}>
              <Icon name="image" type="Feather" style={styles.optionIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBubbleSection}>
              <Icon name="tag" type="Feather" style={styles.optionIcon} />
            </TouchableOpacity>
          </Animated.View>
        </KeyboardAvoidingView>
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
