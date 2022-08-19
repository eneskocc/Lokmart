import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../config'

export class BillDetail extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:16,lineHeight:24,fontWeight:'600'}}>Bill Detail</Text>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
        <Text style={{fontSize:16,lineHeight:24,color:colors.softGray}}>Item Total</Text>
        <Text style={{fontSize:16,lineHeight:24}}>$14.00</Text>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
        <Text style={{fontSize:16,lineHeight:24,color:colors.softGray}}>Item Total</Text>
        <Text style={{fontSize:16,lineHeight:24}}> +   $14.00</Text>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginVertical:5,borderBottomWidth:1,borderBottomColor:colors.gray,paddingBottom:15}}>
        <Text style={{fontSize:16,lineHeight:24,color:colors.softGray}}>Item Total</Text>
        <Text style={{fontSize:16,lineHeight:24}}> +   $14.00</Text>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
        <Text style={{fontSize:16,lineHeight:24,color:colors.softGray}}>Item Total</Text>
        <Text style={{fontSize:16,lineHeight:24}}>$14.00</Text>
        </View>
      </View>
    )
  }
}

export default BillDetail