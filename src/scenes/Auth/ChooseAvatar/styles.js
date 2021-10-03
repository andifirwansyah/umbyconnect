import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  flexTop: {
    flex: 0.3,
    justifyContent: 'flex-end',
    paddingBottom: width * 0.08,
    paddingHorizontal: width * 0.08,
  },
  flexMiddle: {
    flex: 1,
    paddingHorizontal: width * 0.08,
  },
  flexBottom: {
    flex: 0.2,
    paddingHorizontal: width * 0.08,
  },
  scTitle: {
    fontSize: RFValue(28),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  scSubTitle: {
    fontSize: RFValue(28),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
  scNote: {
    fontSize: RFValue(12),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    marginTop: width * 0.02,
  },
  loadAvatarSection: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.06,
  },
  loadAvatar: hasUploaded => ({
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: 75,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: hasUploaded ? Colors.PRIMARY : Colors.GRAY_LIGHT100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.03,
  }),
  loadAvatarIcon: {
    width: width * 0.13,
    height: width * 0.13,
  },
  loadAvatarLable: {
    fontSize: RFValue(12),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_MATE,
  },
  avatarUploaded: {
    width: width * 0.19,
    height: width * 0.19,
    borderRadius: 75,
  },
  deleteButton: {
    width: width * 0.07,
    height: width * 0.07,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  deleteButtonIcon: {
    fontSize: RFValue(16),
    color: Colors.WHITE,
  },
  separator: {
    width: width,
    marginLeft: -width * 0.08,
    height: 1,
    backgroundColor: Colors.GRAY_LIGHT100,
  },
  midLable: {
    fontSize: RFValue(12),
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
    color: Colors.PRIMARY_MATE,
    marginVertical: width * 0.03,
  },
  flexAvatar: {},
  avatarSection: (isSelected, isLastItem) => ({
    width: width * 0.176,
    height: width * 0.176,
    borderRadius: 75,
    marginRight: isLastItem ? 0 : width * 0.045,
    marginVertical: width * 0.02,
    borderWidth: isSelected ? 5 : 0,
    borderColor: isSelected ? Colors.PRIMARY : 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  avatar: (isSelected, hasUploadAvatar) => ({
    width: isSelected ? width * 0.154 : width * 0.175,
    height: isSelected ? width * 0.154 : width * 0.175,
    borderRadius: 75,
    opacity: isSelected ? 0.5 : hasUploadAvatar ? 0.5 : 1,
  }),
  btnNext: {
    height: width * 0.11,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.06,
  },
  btnNextTitle: {
    fontSize: RFValue(15),
    color: Colors.WHITE,
    fontFamily: Fonts.ARIAL_ROUNDED_BOLD,
  },
});
