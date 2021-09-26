import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  tpSection: {
    backgroundColor: Colors.WHITE,
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.04,
  },
  tpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: width * 0.04,
  },
  tpIcon: {
    width: width * 0.1,
    height: width * 0.1,
  },
  tpInfoSection: {
    flex: 1,
    paddingLeft: width * 0.04,
  },
  tpTitle: {
    fontSize: RFValue(16),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  tpSubTitle: {
    fontFamily: Fonts.ARIAL,
    color: Colors.BLACK_LABLE,
    fontSize: RFValue(12),
  },
});
