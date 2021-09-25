import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
  },
  titleInput: {
    fontSize: RFValue(18),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    marginVertical: width * 0.03,
  },
  bodyInput: {
    fontSize: RFValue(14),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  optionSection: {
    width: width,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionBubbleSection: {
    width: width * 0.1,
    height: width * 0.1,
    backgroundColor: Colors.WHITE_MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    marginRight: width * 0.1,
  },
  optionIcon: {
    fontSize: RFValue(20),
    color: Colors.BLACK,
  },
  hdFAndroid: {
    height: width * 0.16,
    backgroundColor: Colors.WHITE,
    elevation: 2,
  },
  hdFAndroidSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  hdFAndroidLeft: {
    flex: 1,
  },
  hdFBubleRounded: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 75,
    backgroundColor: Colors.WHITE_MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hdFBubbleIcon: {
    fontSize: RFValue(22),
  },
  hdFAndroidWrap: {
    backgroundColor: Colors.GRAY_LIGHT100,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.015,
    borderRadius: 75,
  },
  hdFAndroidPost: {
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    fontSize: RFValue(14),
    color: Colors.GRAY_LIGHT200,
  },
});
