import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';
import Btn from './Btn';

export class ApplyBox extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: colors.softGray,
          borderRadius: 10,
          marginVertical: 10,
          width: '100%',
          paddingVertical:20,
          paddingHorizontal: 15,
        }}>
    
          <Image
            source={require('../assets/images/ic/ic_coupon.png')}
            style={{
              marginHorizontal:10,
              height: 25,
              width: 30,
              resizeMode: 'contain',
              alignItems: 'center',
            }}
          />
        
        <TextInput
          style={{flex: 1}}
          placeholder="Promo Code"
          underlineColorAndroid="transparent"
        />
        <View style={{width:'20%'}}>
        <TouchableOpacity
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 5,
          borderRadius: 10,
          backgroundColor:colors.grandient,
        
        }}
        >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '800',
            color: colors.white,
          }}>
          Apply
        </Text>
      </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ApplyBox;
