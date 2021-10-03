import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0, .5)',
  },
  modalView: {
    height: width / 1.5,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 20,
  },
  closeButton: {
    width: width * 0.08,
    height: width * 0.08,
    backgroundColor: Colors.WHITE,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    right: width * 0.04,
    bottom: width * 0.03,
  },
  closeButtonIcon: {
    fontSize: RFValue(19),
    color: Colors.BLACK,
  },
  modalHeader: {
    height: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_LIGHT100,
    marginBottom: width * 0.04,
  },
  modalHeaderTitle: {
    fontSize: RFValue(15),
    color: Colors.BLACK,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: color => ({
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 75,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: width * 0.04,
    marginHorizontal: width * 0.04,
  }),
  imageOption: {
    width: width * 0.07,
    height: width * 0.07,
  },
  optionLable: {
    fontSize: RFValue(17),
    color: Colors.BLACK,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
});
