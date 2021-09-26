import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_MEDIUM,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: 75,
  },
  profileInfo: {
    paddingLeft: width * 0.03,
  },
  fullName: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(17),
  },
  commentDate: {
    fontFamily: Fonts.ARIAL,
    color: Colors.BLACK_LABLE,
    fontSize: RFValue(12),
  },
  commentSection: {
    marginVertical: width * 0.03,
  },
  comment: {
    fontFamily: Fonts.ARIAL,
    fontSize: RFValue(14),
    color: Colors.BLACK_MATE,
    lineHeight: width * 0.05,
  },
  reactionSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnReaction: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: 75,
    backgroundColor: Colors.WHITE_MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width * 0.01,
  },
  btnReactionIcon: {
    fontSize: RFValue(22),
  },
  reactionIconWrap: {
    width: width * 0.5,
    height: width * 0.1,
    backgroundColor: Colors.WHITE_MEDIUM,
    borderRadius: width * 0.015,
    position: 'absolute',
    bottom: width * 0.15,
    left: width * 0.04,
    borderWidth: 1,
    borderColor: '#edeef0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactionIconButton: {
    marginHorizontal: width * 0.03,
  },
  reactionIcon: {
    width: width * 0.065,
    height: width * 0.065,
  },
  reactionCountSection: {
    marginHorizontal: width * 0.012,
    backgroundColor: Colors.WHITE_MEDIUM,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.1,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.015,
  },
  reactionCountIcon: {
    width: width * 0.04,
    height: width * 0.04,
  },
  reactionCount: {
    paddingLeft: width * 0.02,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(13),
    color: Colors.BLACK_LABLE,
  },
});
