import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'styles';
import styles from './styles';

const CStatusBar = props => {
  return (
    <View style={[styles.statusBar, {backgroundColor: props.backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={props.barColor} {...props} />
      </SafeAreaView>
    </View>
  );
};

const Container = ({
  children,
  barColor,
  barStyle,
  backgroundColor,
  onTouchStart,
}) => {
  return (
    <View
      style={[styles.container, {backgroundColor: backgroundColor}]}
      onTouchStart={onTouchStart}>
      <CStatusBar backgroundColor={barColor} barStyle={barStyle} />
      {children}
    </View>
  );
};

Container.defaultProps = {
  barStyle: 'light-content',
  barColor: Colors.WHITE,
};

export default Container;
