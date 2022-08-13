import {Text, View, SafeAreaView,Image} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class ProfilHeader extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          width: '100%',
          padding: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.white,
        }}>
        <View style={{
          width: '100%',
          paddingHorizontal: '6%',
          paddingVertical:10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.white,
        }}>
          <View>
            <Text style={{fontSize:22,lineHeight:33,fontWeight:'700'}}>Hello, Brayden </Text>
            <Text style={{fontSize:14,lineHeight:21,fontWeight:'400',color:colors.softGray}}>Good morning.</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',}}>
          <Image
            source={require('../assets/images/home/notification.png')}
            resizeMode="cover"
            style={{
              height: 25,
              width: 27,
              resizeMode: 'contain',
              marginHorizontal:10
            }}
          />
          <Image
            source={require('../assets/images/home/profile.png')}
            resizeMode="cover"
            style={{
              height: 43,
              width: 43,
              resizeMode: 'contain',
              marginLeft:10
            }}
          />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ProfilHeader;
