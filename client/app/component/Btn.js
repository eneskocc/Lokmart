import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Background from './Background';
import {colors} from '../config';

export class Btn extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 5,
          borderRadius: 10,
          backgroundColor:colors.grandient,
          marginVertical:10,
          paddingVertical:10
        }}
        onPress={this.props.onClick}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '800',
            color: colors.white,
          }}>
          {this.props.txt}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Btn;
