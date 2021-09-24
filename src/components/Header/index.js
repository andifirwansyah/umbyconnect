import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.flexLeft}>
          <View style={styles.searchSection}>
            <Icon name="search" type="Feather" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder={'Cari disini'}
              placeholderTextColor={Colors.WHITE_MEDIUM100}
            />
          </View>
        </View>
        <View style={styles.flexRight}>
          <View style={styles.btnSection}>
            <TouchableOpacity style={styles.btnRightIconSection}>
              <Image
                source={require('assets/notification.png')}
                style={styles.btnRightIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.btnSection, {marginLeft: 10}]}>
            <TouchableOpacity style={styles.btnRightIconSection}>
              <Image
                source={require('assets/arrows-outline-up-and-down.png')}
                style={styles.btnRightIcon2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
