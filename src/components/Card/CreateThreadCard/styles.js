import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.04,
  },
  bubleRadiusIcon: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 75,
    backgroundColor: Colors.WHITE_MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createIcon: {
    width: width * 0.07,
    height: width * 0.07,
  },
  label: {
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.BLACK_MATE,
    paddingLeft: width * 0.03,
  },
});
