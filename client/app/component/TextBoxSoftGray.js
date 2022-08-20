import {Text, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class TextBoxSoftGray extends Component {
  render() {
    return (
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 16, lineHeight: 24}}>{this.props.txt1}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.gray1,
            borderColor: '#000',

            borderRadius: 10,
            marginVertical: 12,
            paddingHorizontal: 20,
            paddingVertical: 15,
            width: '100%',
          }}>
          <TextInput
            style={{flex: 1}}
            placeholder={this.props.txt}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
}

export default TextBoxSoftGray;
