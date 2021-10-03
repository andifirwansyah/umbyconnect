import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  flexTop: {
    // flex: 1,
  },
  flexMidle: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    paddingHorizontal: width * 0.08,
  },
  flexBottom: {
    // flex: 1,
  },
  rLTop: {
    width: width * 0.8,
    height: width * 0.5,
    position: 'absolute',
    left: 0,
    marginTop: -10,
  },
  rLBottom: {
    width: width * 0.8,
    height: width * 0.5,
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: -10,
  },
  scTitle: {
    fontSize: RFValue(25),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    marginBottom: width * 0.1,
  },
  inputItem: {
    height: width * 0.12,
    backgroundColor: Colors.GRAY_LIGHT100,
    borderRadius: 7,
    marginVertical: width * 0.02,
    justifyContent: 'center',
  },
  input: {
    paddingLeft: width * 0.04,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(16),
  },
  inputItemPassword: {
    height: width * 0.12,
    backgroundColor: Colors.GRAY_LIGHT100,
    borderRadius: 7,
    marginVertical: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputPassword: {
    flex: 1,
    paddingLeft: width * 0.04,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(16),
  },
  inputIcon: visible => ({
    fontSize: RFValue(20),
    color: visible ? Colors.PRIMARY_MATE : Colors.PRIMARY,
    paddingRight: width * 0.03,
  }),
  btnSignIn: disabled => ({
    height: width * 0.11,
    backgroundColor: disabled ? 'rgba(102, 102, 255, .8)' : Colors.PRIMARY,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.06,
  }),
  btnSignInTitle: {
    fontSize: RFValue(15),
    color: Colors.WHITE,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  fgtPSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: width * 0.08,
  },
  fgtPSectionLable: {
    fontSize: RFValue(15),
    color: Colors.BLACK,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  fgtPSectionLableColor: {
    fontSize: RFValue(15),
    color: Colors.PRIMARY,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    marginLeft: width * 0.01,
  },
  btnSignUp: {
    height: width * 0.11,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  btnSignUpTitle: {
    fontSize: RFValue(15),
    color: Colors.PRIMARY,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  error: {
    fontSize: RFValue(12),
    color: Colors.DANGER,
    textAlign: 'center',
    marginTop: 10,
  },
});
