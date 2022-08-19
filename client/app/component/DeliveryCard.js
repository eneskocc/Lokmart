import {Text, View,Image} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class DeliveryCard extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderWidth: 1,
          borderColor: colors.gray,
          borderRadius: 15,
          flexDirection: 'row',
          justifyContent:'center'
        }}>
        <View style={{flexDirection: 'row',alignItems:'center',borderEndWidth:3,borderEndColor:colors.green1,paddingEnd:10}}>
          <Image
            style={{width: 20, height: 20,marginHorizontal:10}}
            source={require('../assets/images/ic/star.png')}
          />
          <Text>4.6 (89 reviews)</Text>
        </View>
        <View style={{flexDirection: 'row',alignItems:'center',paddingHorizontal:10}}>
          <Image
            style={{width: 25, height: 15,marginHorizontal:10}}
            source={require('../assets/images/product/car.png')}
          />
          <Text style={{fontSize:14,lineHeight:22,color:colors.green1}}>FREE DELIVERY</Text>
        </View>
      </View>
    );
  }
}

export default DeliveryCard;
