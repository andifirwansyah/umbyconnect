import {StyleSheet, StatusBar} from 'react-native';
import {Colors} from 'styles';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
