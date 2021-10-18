import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
    // paddingVertical: width * 0.04,
  },
  searchSection: {
    paddingHorizontal: width * 0.04,
    backgroundColor: Colors.WHITE,
    paddingBottom: width * 0.03,
  },
  searchInputSection: {
    height: width * 0.09,
    backgroundColor: Colors.GRAY_MEDIUM,
    borderRadius: width * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputIcon: {
    fontSize: RFValue(18),
    paddingLeft: width * 0.02,
    color: Colors.GRAY_LIGHT200,
  },
  searchInput: {
    flex: 1,
    padding: 5,
    paddingRight: width * 0.035,
    fontFamily: Fonts.ARIAL,
    fontSize: RFValue(14),
    color: Colors.BLACK,
  },
  confusedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
  },
  confusedIcon: {
    width: width * 0.3,
    height: width * 0.3,
    opacity: 0.3,
  },
  confusedTitle: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: Colors.BLACK_LABLE,
    textAlign: 'center',
    marginTop: width * 0.05,
  },
  startConversationButton: {
    backgroundColor: Colors.SECONDARY,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.03,
    borderRadius: width * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.05,
  },
  startConversationButtonIcon: {
    fontSize: RFValue(14),
    color: Colors.WHITE,
    paddingRight: width * 0.01,
  },
  startConversationButtonTitle: {
    fontSize: RFValue(13),
    color: Colors.WHITE,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.02,
    backgroundColor: Colors.WHITE,
  },
  avatarSection: {
    // backgroundColor: 'red',
  },
  onlineIndicator: isOnline => ({
    width: width * 0.04,
    height: width * 0.04,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    borderRadius: 75,
    backgroundColor: isOnline ? Colors.SUCCESS : Colors.BLACK_LIGHT, // offline color = GRAY_DARK
    position: 'absolute',
    right: 0,
    bottom: 0,
  }),
  avatar: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 75,
  },
  chatInfo: {
    flex: 1,
    paddingHorizontal: width * 0.03,
  },
  chatName: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(15),
    color: Colors.PRIMARY_DARK,
  },
  chatLast: {
    fontFamily: Fonts.ARIAL,
    fontSize: RFValue(12),
    color: Colors.GRAY_LIGHT200,
    marginTop: 2,
  },
  chatDate: {
    fontFamily: Fonts.ARIAL,
    fontSize: RFValue(10),
    color: Colors.GRAY_LIGHT200,
  },
});
