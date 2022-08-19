import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Header from '../../component/Header';
import Swiper from '../../component/Swiper';
import {colors} from '../../config';
import ProductTiltle from '../../component/ProductTiltle';
import DeliveryCard from '../../component/DeliveryCard';
import Btn from '../../component/Btn';
data = [
  {
    img: require('../../assets/images/swiper/img1.png'),
  },
  {
    img: require('../../assets/images/swiper/img2.png'),
  },
  {
    img: require('../../assets/images/swiper/img3.png'),
  },
];
export class ProductDetails extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        <Swiper data={data} />
        <View style={{paddingHorizontal: '6%', backgroundColor: colors.white,paddingBottom:20}}>
          <ProductTiltle />
          <DeliveryCard />
          <Text style={{fontSize:14,lineHeight:22,paddingHorizontal:5,paddingVertical:10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Btn txt={'ADD TO CART'} onClick={()=>this.props.navigation.navigate('ShopingCart')}/>
        </View>
      </View>
    );
  }
}

export default ProductDetails;
