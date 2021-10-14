import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {ifIphoneX} from 'react-native-iphone-x-helper';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width,
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    ...ifIphoneX(
      {
        height: width * 0.2,
      },
      {
        // height: width * 0.15,
        // maxHeight: width * 0.3,
        paddingVertical: width * 0.02,
      },
    ),
  },
  linkWrap: {
    width: width * 0.1,
    height: width * 0.1,
    backgroundColor: Colors.WHITE_MEDIUM,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkIcon: {
    fontSize: RFValue(22),
  },
  inputSection: heightVal => ({
    flex: 1,
    maxHeight: width * 0.3,
    height: heightVal > 40 ? heightVal : width * 0.11,
    backgroundColor: Colors.WHITE_MEDIUM,
    borderRadius: 20,
    // marginHorizontal: width * 0.02,
  }),
  input: {
    flex: 1,
    fontFamily: Fonts.ARIAL,
    fontSize: RFValue(14),
    paddingHorizontal: width * 0.04,
    color: Colors.BLACK,
  },
  sendWrap: disable => ({
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: disable ? Colors.GRAY_LIGHT200 : Colors.PRIMARY,
    borderRadius: width * 0.5,
    marginLeft: width * 0.02,
  }),
  sendIcon: {
    width: width * 0.065,
    height: width * 0.065,
    marginLeft: width * 0.01,
  },
});
