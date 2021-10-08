import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    // flex: 0.3,
    marginVertical: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: Colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatar: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 75,
  },
  avatarButton: {
    width: width * 0.08,
    height: width * 0.08,
    backgroundColor: Colors.PRIMARY_MATE,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  avatarButtonIcon: {
    fontSize: RFValue(17),
    color: Colors.WHITE,
    marginTop: -2,
  },
  userInfoSection: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: width * 0.06,
    paddingVertical: width * 0.04,
  },
  userInfoLabel: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: Colors.PRIMARY_DARK,
    marginBottom: width * 0.07,
  },
  inputItem: {
    marginBottom: width * 0.03,
  },
  inputLabel: {
    fontFamily: Fonts.ARIAL,
    fontSize: RFValue(12),
    color: Colors.PRIMARY_MATE,
    marginLeft: width * 0.01,
  },
  input: {
    fontFamily: Fonts.ARIAL,
    fontSize: RFValue(14),
    color: Colors.PRIMARY_DARK,
    marginTop: -width * 0.02,
    paddingBottom: width * 0.03,
  },
  buttonSaveSection: {
    paddingHorizontal: width * 0.06,
    paddingVertical: width * 0.03,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
  },
  buttonSave: {
    backgroundColor: Colors.PRIMARY,
    height: width * 0.11,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.046,
  },
  buttonSaveTitle: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: Colors.WHITE,
  },
});
