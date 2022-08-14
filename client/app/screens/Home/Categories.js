import {Text, View} from 'react-native';
import React, {Component} from 'react';
import CategoriesProduct from '../../component/CategoriesProduct';
import Header from '../../component/Header';
import { colors } from '../../config';

export class Categories extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:colors.white}}>
        <Header txt={'Categories'} />
        <CategoriesProduct />
      </View>
    );
  }
}

export default Categories;
