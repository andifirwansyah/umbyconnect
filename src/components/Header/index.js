import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const Header = props => {
  const {showSearch, showNotification, showFilterUp, showShare} = props;
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.flexLeft}>
          {showSearch ? (
            <View style={styles.searchSection}>
              <Icon name="search" type="Feather" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder={'Cari disini'}
                placeholderTextColor={Colors.WHITE_MEDIUM100}
              />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.btnRightIconSection}
              onPress={() => props.navigation.goBack()}>
              <Icon
                name="arrow-left"
                type="Feather"
                style={styles.arrowLeftIcon}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.flexRight}>
          {showNotification && (
            <View style={styles.btnSection}>
              <TouchableOpacity
                style={styles.btnRightIconSection}
                onPress={props.goNotification}>
                <Image
                  source={require('assets/notification.png')}
                  style={styles.btnRightIcon}
                />
              </TouchableOpacity>
            </View>
          )}
          {showFilterUp && (
            <View style={[styles.btnSection, {marginLeft: 10}]}>
              <TouchableOpacity
                style={styles.btnRightIconSection}
                onPress={props.onFilter}>
                <Image
                  source={require('assets/arrows-outline-up-and-down.png')}
                  style={styles.btnRightIcon2}
                />
              </TouchableOpacity>
            </View>
          )}
          {showShare && (
            <View style={[styles.btnSection, {marginLeft: 10}]}>
              <TouchableOpacity
                style={styles.btnRightIconSection}
                onPress={props.onShare}>
                <Icon
                  name="share"
                  type="Feather"
                  style={styles.arrowLeftIcon}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

Header.defaultProps = {
  showSearch: false,
  showNotification: false,
  showFilterUp: false,
  showShare: false,
};

export default Header;
