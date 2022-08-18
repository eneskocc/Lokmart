import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class HeaderClose extends Component {
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
            source={require('../assets/images/ic/ic_close.png')}
          />
        </TouchableOpacity>
        <View style={{width: '70%', alignItems: 'center'}}>
          <Text style={{fontSize: 18, lineHeight: 22, fontWeight: '600'}}>
            {this.props.txt}
          </Text>
        </View>
        <View style={{alignItems: 'center',justifyContent:'center'}}>
          <Text style={{fontSize: 14, lineHeight: 16, fontWeight: '600',color:colors.orange}}>
            {this.props.txt1}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default HeaderClose;