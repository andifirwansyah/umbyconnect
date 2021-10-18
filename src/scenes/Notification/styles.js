import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  notificationItem: {
    paddingVertical: width * 0.02,
    paddingLeft: width * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarSection: {
    // width: width * 0.14,
    // height: width * 0.14,
    paddingBottom: width * 0.03,
  },
  avatar: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: 75,
  },
  notificationType: {
    width: width * 0.06,
    height: width * 0.06,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -5,
    bottom: 10,
    borderWidth: 2,
    borderColor: Colors.WHITE,
  },
  notificationTypeIcon: {
    color: Colors.WHITE,
    fontSize: RFValue(12),
  },
  notificationInfo: {
    flex: 1,
    paddingBottom: width * 0.03,
    borderBottomWidth: 0.5,
    paddingHorizontal: width * 0.03,
    borderBottomColor: Colors.GRAY_LIGHT100,
    justifyContent: 'center',
  },
  notificationTitle: isRead => ({
    fontSize: RFValue(12),
    // fontFamily: Fonts.ARIAL,
    fontWeight: Platform.OS === 'ios' ? '400' : '500',
    color: isRead ? Colors.BLACK_LABLE : Colors.PRIMARY_BLACK,
  }),
  notificationContent: isRead => ({
    fontSize: RFValue(12),
    // fontFamily: Fonts.ARIAL,
    fontWeight: Platform.OS === 'ios' ? '300' : isRead ? '300' : '400',
    color: isRead ? Colors.BLACK_LABLE : Colors.PRIMARY_BLACK,
    marginTop: 2,
  }),
  notificationTime: {
    fontSize: RFValue(10),
    fontWeight: Platform.OS === 'ios' ? '300' : '300',
    color: Colors.BLACK_LABLE,
    marginTop: 2,
  },
  dontHaveNotificationSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dontHaveNotificationIcon: {
    width: width * 0.3,
    height: width * 0.3,
    opacity: 0.2,
    marginBottom: width * 0.04,
  },
  dontHaveNotificationTitle: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(12),
    color: Colors.GRAY_LIGHT200,
  },
});
