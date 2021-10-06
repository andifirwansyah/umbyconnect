import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  section: {
    height: width / 0.8,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    paddingHorizontal: width * 0.1,
    paddingVertical: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: RFValue(17),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.BLACK,
  },
  username: {
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.SECONDARY,
    marginBottom: width * 0.07,
    marginTop: 2,
  },
  qrcode: {
    width: width * 0.7,
    height: width * 0.7,
  },
  btn: {
    height: width * 0.11,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: Colors.PRIMARY,
    borderRadius: 75,
    marginTop: width * 0.1,
  },
  btnIcon: {
    fontSize: RFValue(20),
    color: Colors.PRIMARY,
    marginRight: width * 0.02,
  },
  btnTitle: {
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY,
  },
});
