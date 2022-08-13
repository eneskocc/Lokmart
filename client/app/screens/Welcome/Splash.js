import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import {colors, screen} from '../../config';
import Background from '../../component/Background';
import Btn from '../../component/Btn';

export class Splash extends Component {
  render() {
    return (
      <Background>
        <View
          style={{
            height: '60%',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/welcome/img.png')}
            resizeMode="cover"
            style={{
              height: 250,
              width: 250,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{paddingHorizontal: '4%', alignContent: 'center',justifyContent:'center',height:'40%'}}>
          <Text style={{fontSize:22,lineHeight:32,fontWeight:'700',textAlign:'center',padding:24}}>Welcome to LokMart! Grocery Applications</Text>
          <Text style={{fontSize:14,lineHeight:18,fontWeight:'400',textAlign:'center',padding:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>
          <Btn txt={'NEXT'} onClick={()=>this.props.navigation.navigate('Splash1')}/>
        </View>
      </Background>
    );
  }
}

export default Splash;
