import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
    backgroundColor: Colors.WHITE,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: width * 0.05,
  },
  menuIcon: {
    marginRight: width * 0.04,
    width: width * 0.06,
    height: width * 0.06,
  },
  menuTitle: {
    flex: 1,
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL,
    color: Colors.BLACK,
  },
});
