import {Text, View} from 'react-native';
import React, {Component} from 'react';
import ProfilHeader from '../../component/ProfilHeader';
import SearchBox from '../../component/SearchBox';
import { colors } from '../../config';
import CategoriesHorizontal from '../../component/CategoriesHorizontal';
import Popular from '../../component/Popular';

export class index extends Component {
  render() {
    return (
      <View style={{backgroundColor:colors.white,flex:1}}>
        <ProfilHeader />
        <View style={{paddingHorizontal: '6%'}}>
          <SearchBox />
          <CategoriesHorizontal onClick={()=>this.props.navigation.navigate('Categories')}/>
          <Popular />
        </View>
      </View>
    );
  }
}

export default index;
