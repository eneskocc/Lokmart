import {ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import Header from '../../component/Header';
import {colors} from '../../config';
import TextBoxSoftGray from '../../component/TextBoxSoftGray';
import BtnCheckBox from '../../component/BtnCheckBox';
import Btn from '../../component/Btn';

export class ShopingAddress extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <Header txt={'CHECKOUT'} />
        <ScrollView>
          <View style={{paddingHorizontal: '6%'}}>
            <TextBoxSoftGray txt1={'Full name'}  txt={'Full name'}/>
            <TextBoxSoftGray txt1={'Email Address'} txt={'Email Address'}/>
            <TextBoxSoftGray txt1={'Address'} txt={'Address'}/>
            <TextBoxSoftGray txt1={'Address'} txt={'Address'}/>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '40%'}}>
                <TextBoxSoftGray txt1={'Zip Code'} txt={'Zip Code'}/>
              </View>
              <View style={{width: '40%'}}>
                <TextBoxSoftGray txt1={'City'} txt={'City'}/>
              </View>
            </View>
            <BtnCheckBox txt={'Save shipping address'} />
            <Btn txt={'NEXT'}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ShopingAddress;
