import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';
import CategoriesHorizontalCard from './CategoriesHorizontalCard';

export class CategoriesHorizontal extends Component {
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
        <ScrollView horizontal>
            <CategoriesHorizontalCard header={'Fruits'} item={'1126 Items'} img={require('../assets/images/ic/ic_lemon.png')}/>
            <CategoriesHorizontalCard header={'Chicken'} item={'1126 Items'} img={require('../assets/images/ic/ic_chicken.png')}/>
            <CategoriesHorizontalCard header={'Fish'} item={'1126 Items'} img={require('../assets/images/ic/ic_fish.png')}/>
            <CategoriesHorizontalCard header={'Dairy'} item={'1126 Items'} img={require('../assets/images/ic/ic_cake.png')}/>
            <CategoriesHorizontalCard header={'Vegetable'} item={'1126 Items'} img={require('../assets/images/ic/ic_cabbage.png')}/>
        </ScrollView>
      </View>
    );
  }
}

export default CategoriesHorizontal;
