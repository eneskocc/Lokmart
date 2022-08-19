import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Header from '../../component/Header';
import {colors} from '../../config';
import ProductCard from '../../component/ProductCard';
import SearchBox from '../../component/SearchBox';

export class Products extends Component {
  render() {
    return (
      <View>
        <Header txt={this.props.route.params.header} />
        <View style={{backgroundColor: colors.white, paddingHorizontal: '6%'}}>
          <SearchBox />
          <ProductCard
            header={'Fruits'}
            img={require('../../assets/images/product/placeholder1.png')}
            ratings={'97 Ratings'}
            price={'15$'}
            onClick={() => this.props.navigation.navigate('ProductDetails')}
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
      </View>
    );
  }
}

export default Products;
