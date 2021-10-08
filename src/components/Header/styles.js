import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: width * 0.16,
    backgroundColor: Colors.WHITE,
    // elevation: 2,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  flexLeft: {
    flex: 1,
  },
  searchSection: {
    height: width * 0.1,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE_MEDIUM,
    borderRadius: width * 0.04,
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  searchInput: {
    flex: 1,
    fontSize: RFValue(16),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.BLACK_TEXT,
  },
  searchIcon: {
    fontSize: RFValue(20),
    color: Colors.WHITE_MEDIUM100,
    paddingRight: 5,
  },
  flexLeftArrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lgTitle: {
    fontSize: RFValue(17),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  smTitle: {
    fontSize: RFValue(16),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    paddingLeft: width * 0.04,
  },
  smTitleIcon: {
    width: width * 0.06,
    height: width * 0.06,
    marginLeft: width * 0.02,
  },
  arrowLeftIcon: {
    fontSize: RFValue(19),
  },

  flexRight: {
    flexDirection: 'row',
    paddingLeft: width * 0.03,
    alignItems: 'center',
  },
  btnSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnRightIconSection: {
    width: width * 0.095,
    height: width * 0.095,
    backgroundColor: Colors.WHITE_MEDIUM,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRightIcon: {
    width: width * 0.06,
    height: width * 0.06,
  },
  btnRightIcon2: {
    width: width * 0.065,
    height: width * 0.065,
  },
});
