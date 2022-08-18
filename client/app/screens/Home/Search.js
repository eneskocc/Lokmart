import {Text, View, ScrollView,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import SearchBox from '../../component/SearchBox';
import CategoriesHorizontal from '../../component/CategoriesHorizontal';
import ProductCard from '../../component/ProductCard';
import {colors} from '../../config';
import Header from '../../component/Header';
import RecentSearchCard from '../../component/RecentSearchCard';
import HeaderClose from '../../component/HeaderClose';

export class Search extends Component {
  render() {
    return (
      <View style={{backgroundColor: colors.white, flex: 1}}>
        <HeaderClose />
        <View style={{paddingHorizontal: '6%',borderBottomWidth:7,borderBottomColor:'#F1F1F4'}}>
          <SearchBox />
          <View style={{width: '100%', paddingVertical: 10}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, lineHeight: 22, fontWeight: '700'}}>
          Recent Search
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '600',
                color: colors.orange,
              }}>Clear All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
        <RecentSearchCard txt={'Potota'}/>
        <RecentSearchCard txt={'Potota'}/>
        <RecentSearchCard txt={'Potota'}/>
        <RecentSearchCard txt={'Potota'}/>
        </ScrollView>
        </View>
        </View>

        <ScrollView>
          <View style={{paddingHorizontal: '6%',paddingTop:10}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 22, lineHeight: 22, fontWeight: '700'}}>
                Search Resault
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

export default Search;
