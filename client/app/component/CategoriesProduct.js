import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';
import CategoriesProductCard from './CategoriesProductCard';

export class CategoriesProduct extends Component {
  render() {
    return (
      <View style={{width: '100%', paddingVertical: 10}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, lineHeight: 22, fontWeight: '700'}}>
            Categories
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '600',
                color: colors.orange,
              }}>
              Show all {'>'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
            <CategoriesProductCard header={'Fruits'} item={'1126 Items'} img={require('../assets/images/ic/ic_lemon.png')}/>
            <CategoriesProductCard header={'Chicken'} item={'1126 Items'} img={require('../assets/images/ic/ic_chicken.png')}/>
            <CategoriesProductCard header={'Fish'} item={'1126 Items'} img={require('../assets/images/ic/ic_fish.png')}/>
            <CategoriesProductCard header={'Dairy'} item={'1126 Items'} img={require('../assets/images/ic/ic_cake.png')}/>
            <CategoriesProductCard header={'Vegetable'} item={'1126 Items'} img={require('../assets/images/ic/ic_cabbage.png')}/>
        </ScrollView>
      </View>
    );
  }
}

export default CategoriesProduct;