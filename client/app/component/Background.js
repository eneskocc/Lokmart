import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';
import { colors } from '../config';

const FROM_COLOR = colors.orange;
const TO_COLOR = colors.grandient;

const Background = ( { children }) => {
  return (
    <View style={{flex: 1}}>
      <Svg height="60%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id="grad" x1="100%" y1="0%" x2="0%" y2="0%">
            <Stop offset="0" stopColor={FROM_COLOR} />
            <Stop offset="1" stopColor={TO_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      { children }
    </View>
  );
};

export default Background;
