import {Text, View} from 'react-native';
import React, {Component} from 'react';
import ProfilHeader from '../../component/ProfilHeader';
import SearchBox from '../../component/SearchBox';
import { colors } from '../../config';
import CategoriesHorizontal from '../../component/CategoriesHorizontal';

export class index extends Component {
  render() {
    return (
      <View style={{backgroundColor:colors.white,flex:1}}>
        <ProfilHeader />
        <View style={{paddingHorizontal: '6%'}}>
          <SearchBox />
          <CategoriesHorizontal />
        </View>
      </View>
    );
  }
}

export default index;
