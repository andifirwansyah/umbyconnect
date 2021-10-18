import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    position: 'absolute',
    top: width * 0.2,
    left: 0,
    right: 0,
  },
  contentView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    height: height - width * 0.25,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.04,
  },
  contentHeaderBtnIcon: {
    fontSize: RFValue(20),
    color: Colors.BLACK_LABLE,
  },
  contentHeaderBtnCancelTitle: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: '#1a73e8',
  },
  contentHeaderBtnRight: {
    width: width * 0.13,
  },
  contentTitle: {
    flex: 1,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: Colors.BLACK,
    textAlign: 'center',
    paddingVertical: width * 0.04,
    textTransform: 'uppercase',
  },
  searchBox: {
    backgroundColor: Colors.GRAY_MEDIUM,
    marginHorizontal: width * 0.05,
    borderRadius: width * 0.04,
    height: width * 0.1,
    marginBottom: width * 0.02,
  },
  searchBoxInput: {
    paddingHorizontal: width * 0.04,
    fontSize: RFValue(14),
    color: Colors.BLACK,
  },
  listItem: {
    paddingHorizontal: width * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: width * 0.03,
  },
  avatarSection: {
    width: width * 0.12,
    height: width * 0.12,
    marginRight: width * 0.03,
  },
  avatar: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 75,
  },
  listItemInfo: {
    flex: 1,
    height: width * 0.113,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.GRAY_LIGHT100,
    marginTop: 5,
  },
  listItemName: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: Colors.BLACK,
  },
  listItemUsername: {
    fontFamily: Fonts.ARIAL,
    fontSize: RFValue(11),
    color: Colors.GRAY_LIGHT200,
  },
  userIndicator: isOnline => ({
    width: width * 0.04,
    height: width * 0.04,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    borderRadius: 75,
    backgroundColor: isOnline ? Colors.SUCCESS : Colors.BLACK_LIGHT,
    position: 'absolute',
    right: 0,
    bottom: 0,
  }),
});
