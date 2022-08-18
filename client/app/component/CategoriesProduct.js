import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';
import CategoriesProductCard from './CategoriesProductCard';

export class CategoriesProduct extends Component {
  render() {
    return (
      <View style={{width: '100%', paddingVertical: 30}}>
        <ScrollView>
          <CategoriesProductCard
            header={'Fruits'}
            item={'1126 Items'}
            img={require('../assets/images/ic/ic_lemon.png')}
            onClick={() => this.props.navi.navigate('Products',{
              header:'Fruits'
            })}
          />
          <CategoriesProductCard
            header={'Chicken'}
            item={'1126 Items'}
            img={require('../assets/images/ic/ic_chicken.png')}
          />
          <CategoriesProductCard
            header={'Fish'}
            item={'1126 Items'}
            img={require('../assets/images/ic/ic_fish.png')}
          />
          <CategoriesProductCard
            header={'Dairy'}
            item={'1126 Items'}
            img={require('../assets/images/ic/ic_cake.png')}
          />
          <CategoriesProductCard
            header={'Vegetable'}
            item={'1126 Items'}
            img={require('../assets/images/ic/ic_cabbage.png')}
          />
        </ScrollView>
      </View>
    );
  }
}

export default CategoriesProduct;
