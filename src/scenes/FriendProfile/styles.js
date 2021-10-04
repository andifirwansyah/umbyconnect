import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: width * 0.16,
    backgroundColor: 'transparent',
  },
  headerSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  headerLeft: {
    flex: 1,
  },
  headerLeftIcon: {
    fontSize: RFValue(22),
  },
  headerRightIcon: {
    fontSize: RFValue(22),
  },
  profileInfoSection: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: width * 0.07,
    borderTopRightRadius: width * 0.07,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  profileInfoWrap: {
    alignItems: 'center',
    paddingBottom: width * 0.1,
  },
  avatarSection: {
    width: width * 0.2,
    height: width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 75,
    marginTop: -width * 0.1,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  avatar: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 75,
  },
  fullName: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(18),
    marginTop: width * 0.04,
    color: Colors.PRIMARY_DARK,
  },
  major: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(12),
    letterSpacing: 0.5,
    color: Colors.PRIMARY_MATE,
    marginTop: width * 0.02,
  },
  bio: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: Colors.PRIMARY_DARK,
    marginTop: width * 0.05,
    textAlign: 'center',
    marginHorizontal: width * 0.05,
    opacity: 0.9,
  },
  btnActionSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: width * 0.05,
  },
  btnFollow: isFollow => ({
    backgroundColor: isFollow ? Colors.WHITE : Colors.PRIMARY,
    paddingHorizontal: width * 0.08,
    height: width * 0.11,
    borderWidth: isFollow ? 1 : 0,
    borderColor: isFollow ? Colors.GRAY_DARK : 'transparent',
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.05,
    // shadowColor: Colors.BLACK,
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,
    // elevation: 10,
    flexDirection: 'row',
  }),
  btnIconFollow: {
    fontSize: RFValue(14),
    color: Colors.WHITE,
    marginRight: width * 0.02,
  },
  btnFollowTitle: isFollow => ({
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: isFollow ? Colors.BLACK_LABLE : Colors.WHITE,
  }),
  btnChat: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: Colors.GRAY_DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnChatIcon: {
    fontSize: RFValue(25),
    color: Colors.PRIMARY,
  },
  lastProfileSection: {
    flexDirection: 'row',
    marginTop: width * 0.08,
  },
  lastProfileWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastProfileTotal: {
    fontSize: RFValue(18),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_DARK,
  },
  lastProfileLable: {
    fontSize: RFValue(12),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: '#8793ad',
    marginTop: width * 0.01,
  },
  lastProfileBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.GRAY_LIGHT100,
  },
  separator: {
    width: width,
    height: width * 0.02,
    backgroundColor: Colors.WHITE_MEDIUM,
  },
  followersSection: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.04,
  },
  tpFollower: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tpFollowerTitle: {
    flex: 1,
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_DARK,
  },
  tpFollowerRightTitle: {
    fontSize: RFValue(11),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY,
  },
  followerList: {
    flexDirection: 'row',
  },
  followerItem: {
    alignItems: 'center',
    paddingVertical: width * 0.04,
    marginRight: width * 0.05,
  },
  followerAvatar: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: 75,
  },
  followerFullName: {
    fontSize: RFValue(12),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_DARK,
    marginTop: width * 0.01,
  },
});
