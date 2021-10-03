/* eslint-disable prettier/prettier */
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
import {Container, Icon} from 'components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useSignUp from './useSignUp';
import {Colors} from 'styles';

const SignUp = ({navigation}) => {
  const {
    loading,
    passwordVisible,
    email,
    username,
    password,
    setPasswordVisible,
    setEmail,
    setUsername,
    setPassword,
    error,
    isInputEmpty,
    handleUserRegister,
  } = useSignUp(navigation);
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
            onChangeText={val => setEmail(val)}
            value={email}
          />
        </View>
        {error?.email && <Text style={styles.errorNote}>{error.email}</Text>}
        <View style={styles.inputItem}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#9CA3AF"
            onChangeText={val => setUsername(val)}
            value={username}
          />
        </View>
        {error?.username && <Text style={styles.errorNote}>{error.username}</Text>}
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
        {error?.password && <Text style={styles.errorNote}>{error.password}</Text>}
        <TouchableOpacity
          style={styles.btnSignIn(isInputEmpty() ? true : false)}
          onPress={() => handleUserRegister()}
          disabled={isInputEmpty() ? true : false}>
          {loading ? (
            <ActivityIndicator size="small" color={Colors.WHITE} />
          ) : (
            <Text style={styles.btnSignInTitle}>Daftar Sekarang</Text>
          )}
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
