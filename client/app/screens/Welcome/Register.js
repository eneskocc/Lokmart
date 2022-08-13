import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';
import Btn from '../../component/Btn';
import BtnCheckBox from '../../component/BtnCheckBox';
import TextBox from '../../component/TextBox';
import {colors} from '../../config';

const FROM_COLOR = colors.orange;
const TO_COLOR = colors.grandient;

export class Register extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Svg height="30%" width="100%" style={StyleSheet.absoluteFillObject}>
          <Defs>
            <LinearGradient id="grad" x1="100%" y1="0%" x2="0%" y2="0%">
              <Stop offset="0" stopColor={FROM_COLOR} />
              <Stop offset="1" stopColor={TO_COLOR} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#grad)" />
        </Svg>
        <View
          style={{
            height: '30%',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/welcome/logo.png')}
            resizeMode="cover"
            style={{
              height: 250,
              width: 250,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '8%',
            alignContent: 'center',
            paddingVertical: '4%',
            backgroundColor: colors.white,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 36,
              fontWeight: '700',
              paddingVertical: 10,
            }}>
            Create your account
          </Text>
       
          <TextBox img1={require('../../assets/images/welcome/user.png')} />
          <TextBox img1={require('../../assets/images/welcome/email.png')} />
          <TextBox
            img1={require('../../assets/images/welcome/lock.png')}
            img2={require('../../assets/images/welcome/hide.png')}
          />
          <Btn
            txt={'Register'}
            onClick={() => this.props.navigation.navigate('Login')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}>
            <BtnCheckBox txt={'By tapping “Sign Up” you accept our terms and condition'} />
            
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 22,
                    color: colors.softGray,
                    fontWeight: '400',
                  }}>
                  Already have account? 
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 22,
                    color: colors.orange,
                    fontWeight: '400',
                  }}>
                 Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Register;

