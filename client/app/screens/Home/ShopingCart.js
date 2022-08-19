import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../../component/Header'
import { colors } from '../../config'
import ShopingCard from '../../component/ShopingCard'

export class ShopingCart extends Component {
  render() {
    return (
        <View style={{flex:1,backgroundColor:colors.white}}>
            <Header txt={'Shoping Cart'}/>
       <View style={{paddingHorizontal:'6%',backgroundColor:colors.white}}>
<ShopingCard />
<ShopingCard />
<ShopingCard />
       </View>
      </View>
    )
  }
}

export default ShopingCart