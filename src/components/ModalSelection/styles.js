import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  section: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 0.8,
    backgroundColor: Colors.WHITE,
    marginBottom: width * 0.03,
    borderRadius: width * 0.047,
    paddingHorizontal: width * 0.05,
  },
  contentTitle: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    textAlign: 'center',
    marginVertical: width * 0.06,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_LIGHT100,
    paddingVertical: width * 0.04,
  },
  listItemName: {
    fontFamily: Fonts.ARIAL,
    fontSize: RFValue(14),
    color: Colors.BLACK,
  },
  footer: {
    flexDirection: 'row',
  },
  btnFooter: outline => ({
    flex: 1,
    height: width * 0.12,
    backgroundColor: outline ? 'transparent' : Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.01,
    borderRadius: width * 0.047,
    borderWidth: 2,
    borderColor: outline ? Colors.WHITE : Colors.WHITE,
  }),
  btnFooterTitle: outline => ({
    color: outline ? Colors.WHITE : Colors.BLACK,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
  }),
});
