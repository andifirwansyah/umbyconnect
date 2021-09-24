import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {Container, Icon} from 'components';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.flexTop}>
        <Image
          source={require('assets/rectangle-login-top.png')}
          style={styles.rLTop}
          resizeMode="contain"
        />
      </View>
      <View style={styles.flexMidle}>
        <Text style={styles.scTitle}>Login Dulu Gan!</Text>
        <View style={styles.inputItem}>
          <TextInput
            style={styles.input}
            placeholder="Alamat Email"
            placeholderTextColor="#9CA3AF"
          />
        </View>
        <View style={styles.inputItem}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#9CA3AF"
          />
        </View>
        <View style={styles.inputItemPassword}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Kata Sandi"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name="eye"
              type="AntDesign"
              style={styles.inputIcon(passwordVisible)}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btnSignIn}
          onPress={() => navigation.navigate('ChooseAvatar')}>
          <Text style={styles.btnSignInTitle}>Daftar Sekarang</Text>
        </TouchableOpacity>
        <View style={styles.fgtPSection}>
          <Text style={styles.fgtPSectionLable}>Sudah Punya Akun?</Text>
        </View>
        <TouchableOpacity
          style={styles.btnSignUp}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnSignUpTitle}>Login Disini</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flexBottom}>
        <Image
          source={require('assets/rectangle-login-bottom.png')}
          style={styles.rLBottom}
          resizeMode="contain"
        />
      </View>
    </SafeAreaProvider>
  );
};

export default SignUp;
