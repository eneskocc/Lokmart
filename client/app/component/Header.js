import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class Header extends Component {
  render() {
    return (
      <SafeAreaView
        style={{flexDirection: 'row', backgroundColor: colors.white}}>
        <TouchableOpacity onPress={this.props.onClick}>
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: 'contain',
              marginLeft: 20,
              marginBottom: 15,
            }}
            source={require('../assets/images/ic/ic_back.png')}
          />
        </TouchableOpacity>
        <View style={{width: '78%',paddingHorizontal:20}}>
          <Text style={{fontSize: 18, lineHeight: 22, fontWeight: '600'}}>
            {this.props.txt}
          </Text>
        </View>
        <TouchableOpacity onPress={this.props.onClick}>
          <Image
            style={{
              width: 25,
              height: 25,
              resizeMode: 'contain',
              marginRight: 20,
              marginBottom: 15,
            }}
            source={require('../assets/images/ic/ic_more.png')}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Header;
