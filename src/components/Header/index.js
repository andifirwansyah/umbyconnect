import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';
import {getNotificationBadge} from 'utils';

const Header = props => {
  const [notificationBadge, setNotificationBadge] = React.useState(0);
  const {
    showSearch,
    showNotification,
    showFilterUp,
    showShare,
    smTitle,
    lgTitle,
    smTitleIcon,
    sortType,
    editable,
    onGoBack,
    avatar,
    onCreateNew,
    shadow,
  } = props;

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      handleGetNotificationBadge();
    });
    return unsubscribe;
  }, [props.navigation]);

  const handleGetNotificationBadge = async () => {
    const response = await getNotificationBadge();
    if (response.request.status === 200) {
      setNotificationBadge(response.data.badge);
    }
  };
  return (
    <View style={shadow ? styles.container : styles.containerWithoutShadow}>
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
          ) : lgTitle ? (
            <Text numberOfLines={1} style={styles.lgTitle}>
              {lgTitle}
            </Text>
          ) : (
            <View style={styles.flexLeftArrow}>
              <TouchableOpacity
                style={styles.btnRightIconSection}
                onPress={editable ? onGoBack : () => props.navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  type="Feather"
                  style={styles.arrowLeftIcon}
                />
              </TouchableOpacity>
              {avatar && <Image source={{uri: avatar}} style={styles.avatar} />}
              <Text numberOfLines={1} style={styles.smTitle}>
                {smTitle}
              </Text>
              {smTitleIcon && (
                <Image source={{uri: smTitleIcon}} style={styles.smTitleIcon} />
              )}
            </View>
          )}
        </View>
        <View style={styles.flexRight}>
          {onCreateNew && (
            <View style={[styles.btnSection, {marginRight: 10}]}>
              <TouchableOpacity
                style={styles.btnRightIconSection}
                onPress={props.onCreateNew}>
                <Icon
                  name="new-message"
                  type="Entypo"
                  style={styles.arrowLeftIcon}
                />
              </TouchableOpacity>
            </View>
          )}
          {showNotification && (
            <View style={styles.btnSection}>
              <TouchableOpacity
                style={styles.btnRightIconSection}
                onPress={() => props.navigation.navigate('Notification')}>
                <Image
                  source={require('assets/notification.png')}
                  style={styles.btnRightIcon}
                />
                {notificationBadge > 0 && (
                  <View style={styles.badgeNotificationSection}>
                    <Text style={styles.badgeNotificationValue}>
                      {notificationBadge}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          )}
          {showFilterUp && (
            <View style={[styles.btnSection, {marginLeft: 10}]}>
              <TouchableOpacity
                style={styles.btnRightIconSection}
                onPress={props.onFilter}>
                {sortType === 'desc' ? (
                  <Image
                    source={require('assets/arrows-outline-up-and-down.png')}
                    style={styles.btnRightIcon2}
                  />
                ) : (
                  <Image
                    source={require('assets/arrows-outline-up-and-up.png')}
                    style={styles.btnRightIcon2}
                  />
                )}
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
  smTitle: '',
  lgTitle: '',
  editable: false,
  avatar: undefined,
  onCreateNew: undefined,
  shadow: true,
};

export default Header;
