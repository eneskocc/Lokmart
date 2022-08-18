import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import ProfilHeader from '../../component/ProfilHeader';
import SearchBox from '../../component/SearchBox';
import {colors} from '../../config';
import CategoriesHorizontal from '../../component/CategoriesHorizontal';
import Popular from '../../component/Popular';
import ProductCard from '../../component/ProductCard';

export class index extends Component {
  render() {
    return (
      <View style={{backgroundColor: colors.white, flex: 1}}>
        <ProfilHeader />
        <ScrollView>
          <View style={{paddingHorizontal: '6%'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
              <SearchBox onClick1={()=>this.props.navigation.navigate('Filter')}/>
            </TouchableOpacity>

            <CategoriesHorizontal
              onClick={() => this.props.navigation.navigate('Categories')}
            />
            <Popular />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 22, lineHeight: 22, fontWeight: '700'}}>
                All Grocery
              </Text>
            </View>
            <ProductCard
              header={'Fruits'}
              img={require('../../assets/images/product/placeholder1.png')}
              ratings={'97 Ratings'}
              price={'15$'}
            />
            <ProductCard
              header={'Fruits'}
              img={require('../../assets/images/ic/ic_lemon.png')}
              ratings={'97 Ratings'}
              price={'15$'}
            />
            <ProductCard
              header={'Fruits'}
              img={require('../../assets/images/ic/ic_lemon.png')}
              ratings={'97 Ratings'}
              price={'15$'}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default index;
