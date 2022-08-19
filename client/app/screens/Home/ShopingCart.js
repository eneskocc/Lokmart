import {ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import Header from '../../component/Header';
import {colors} from '../../config';
import ShopingCard from '../../component/ShopingCard';
import BillDetail from '../../component/BillDetail';
import ApplyBox from '../../component/ApplyBox';
import Btn from '../../component/Btn';

export class ShopingCart extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <Header txt={'Shoping Cart'} />
        <ScrollView>
          <View
            style={{paddingHorizontal: '6%', backgroundColor: colors.white}}>
            <ShopingCard />
            <ShopingCard />
            <ShopingCard />
            <BillDetail />
            <ApplyBox />
            <Btn txt={'CHECKOUT'} onClick={() => this.props.navigation.navigate('ShopingAddress')}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ShopingCart;
