import {Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import ProductTiltle from './ProductTiltle';
import {colors} from '../config';

export class ShopingCard extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: colors.gray,
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 15,
          marginVertical:10
        }}>
        <View
          style={{width: '30%', paddingHorizontal: 10, paddingVertical: 10}}>
          <Image
            style={{width: '100%', height: 50, resizeMode: 'contain'}}
            source={require('../assets/images/swiper/img1.png')}
          />
        </View>

        <View style={{width: '70%'}}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 20,
              fontWeight: '600',
              marginVertical: 4,
            }}>
            Organic Banana
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 22,
              fontWeight: '600',
              marginVertical: 2,
              color: colors.gray,
            }}>
            ProductTiltle
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 10,
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '40%',
                justifyContent: 'space-between',
              }}>
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
      </View>
    );
  }
}

export default ShopingCard;
