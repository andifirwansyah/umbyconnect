import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: detail => ({
    backgroundColor: Colors.WHITE,
    borderRadius: detail ? 0 : width * 0.03,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.03,
    marginTop: width * 0.04,
    borderBottomWidth: detail ? 1 : 0,
    borderBottomColor: Colors.GRAY_MEDIUM,
  }),
  tpHCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tpHCardInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
  },
  tpHCardMiddle: {
    paddingLeft: width * 0.03,
  },
  fullName: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.BLACK_MATE,
    fontSize: RFValue(12),
  },
  postDate: {
    fontFamily: Fonts.ARIAL,
    color: Colors.BLACK_LABLE,
    fontSize: RFValue(11),
  },
  reportIcon: {
    fontSize: RFValue(16),
    color: Colors.BLACK_MATE,
  },
  postTitle: {
    fontSize: RFValue(15),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    marginVertical: width * 0.04,
  },
  postImage: {
    width: '100%',
    height: width * 0.3,
    borderRadius: width * 0.03,
  },
  btHcard: detail => ({
    flexDirection: 'row',
    marginTop: detail ? width * 0.08 : width * 0.03,
    marginBottom: detail ? width * 0.04 : 0,
    alignItems: 'center',
  }),
  btHFlex: {
    flex: 1,
  },
  reactionSection: {
    flexDirection: 'row',
    width: width * 0.3,
    height: width * 0.08,
    borderRadius: width * 0.015,
    backgroundColor: Colors.WHITE_MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactionBtn: {
    marginHorizontal: width * 0.025,
  },
  reactionIcon: {
    width: width * 0.05,
    height: width * 0.05,
  },
  totalViewSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIcon: {
    width: width * 0.05,
    height: width * 0.05,
  },
  totalView: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(11),
    color: Colors.BLACK_MATE,
    marginLeft: width * 0.01,
  },
  totalCommentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.08,
  },
  commentIcon: {
    width: width * 0.05,
    height: width * 0.05,
  },
  totalComment: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(11),
    color: Colors.BLACK_MATE,
    marginLeft: width * 0.01,
  },
});
