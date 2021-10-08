import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    margin: 0,
    padding: 0,
  },
  modalSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.WHITE,
    height: width / 0.7,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  modalIcon: {
    width: width * 0.5,
    height: width * 0.5,
    opacity: 0.5,
  },
  modalTitleSection: {
    paddingVertical: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: RFValue(18),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_DARK,
  },
  modalContentSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.08,
  },

  modalSubTitle: {
    textAlign: 'center',
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_DARK,
    marginBottom: width * 0.02,
  },
  modalDescription: {
    textAlign: 'center',
    fontSize: RFValue(12),
    fontFamily: Fonts.ARIAL,
    color: Colors.PRIMARY_MATE,
    // marginBottom: width * 0.1,
  },
  modalButton: {
    height: width * 0.11,
    width: '80%',
    borderRadius: 75,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.1,
  },
  modalButtonTitle: {
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.WHITE,
  },
  modalButtonCancel: {
    height: width * 0.11,
    width: '80%',
    borderRadius: 75,
    borderWidth: 1.5,
    borderColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.05,
  },
  modalButtonCancelTitle: {
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY,
  },
});
