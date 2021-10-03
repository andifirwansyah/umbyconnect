import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Icon} from 'components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useSignIn from './useSignIn';
import {Colors} from 'styles';

const SignIn = ({navigation}) => {
  const {
    loading,
    email,
    password,
    passwordVisible,
    setEmail,
    setPassword,
    setPasswordVisible,
    handleUserLogin,
    isInputEmpty,
    error,
  } = useSignIn();
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
            placeholder="Username atau Email"
            placeholderTextColor="#9CA3AF"
            onChangeText={val => setEmail(val)}
            value={email}
          />
        </View>
        <View style={styles.inputItemPassword}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Kata Sandi"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={passwordVisible}
            onChangeText={val => setPassword(val)}
            value={password}
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
          style={styles.btnSignIn(isInputEmpty() ? true : false)}
          onPress={() => handleUserLogin()}
          disabled={isInputEmpty() ? true : false}>
          {loading ? (
            <ActivityIndicator size="small" color={Colors.WHITE} />
          ) : (
            <Text style={styles.btnSignInTitle}>Masuk</Text>
          )}
        </TouchableOpacity>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <View style={styles.fgtPSection}>
          <Text style={styles.fgtPSectionLable}>Lupa Kata Sandi?</Text>
          <TouchableOpacity>
            <Text style={styles.fgtPSectionLableColor}>Atur Ulang</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btnSignUp}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.btnSignUpTitle}>Daftar Sekarang</Text>
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

export default SignIn;
