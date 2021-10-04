import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    // paddingHorizontal: width * 0.04,
  },
  noComment: {
    flex: 1,
    // height: width / 2.5,
    marginTop: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noCommentLable: {
    fontFamily: Fonts.ARIAL,
    color: Colors.BLACK_LABLE,
  },
});
