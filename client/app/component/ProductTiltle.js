import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class ProductTiltle extends Component {
  render() {
    return (
      <View style={{paddingHorizontal:10}}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            fontWeight: '600',
            color: colors.orange,
            marginVertical: 5,
          }}>
          ProductTiltle
        </Text>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 20,
            fontWeight: '600',
            marginVertical: 7,
          }}>
          Organic Banana
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical:10
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 20,
                fontWeight: '600',
                marginVertical: 7,
              }}>
              $15
            </Text>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 20,
                fontWeight: '400',
                color: colors.softGray,
                marginVertical: 7,
                marginHorizontal: 15,
              }}>
              $30
            </Text>
          </View>
          <View style={{flexDirection: 'row',alignItems:'center',width:'30%',justifyContent:'space-between'}}>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.gray,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '700',
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text>3</Text>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.gray,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '700',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ProductTiltle;
