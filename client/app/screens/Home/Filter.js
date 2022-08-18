import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import HeaderClose from '../../component/HeaderClose';
import BtnCheckBoxElipse from '../../component/BtnCheckBoxElipse';
import {colors} from '../../config';
import Btn from '../../component/Btn';
import BtnCheckBoxFilter from '../../component/BtnCheckBoxFilter';

export class Filter extends Component {
  render() {
    return (
      <View>
        <HeaderClose txt={'Filter Opltions'} txt1={'Reset'} />
        <View style={{paddingHorizontal: '6%', backgroundColor: colors.white}}>
            <ScrollView>
          <View style={{borderBottomWidth:0.5,borderBottomColor:colors.softGray,paddingVertical:10}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '600'}}>
                Sort by Rating
              </Text>
            </View>
            <BtnCheckBoxElipse txt={'1 - 2 Stars'} />
            <BtnCheckBoxElipse txt={'1 - 2 Stars'} />
            <BtnCheckBoxElipse txt={'1 - 2 Stars'} />
            <BtnCheckBoxElipse txt={'1 - 2 Stars'} />
          </View>
          <View style={{borderBottomWidth:0.5,borderBottomColor:colors.softGray,paddingVertical:10}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '600'}}>
              Sort by discounts
              </Text>
            </View>
            <BtnCheckBoxElipse txt={'10% - 20%'} />
            <BtnCheckBoxElipse txt={'10% - 20%'} />
            <BtnCheckBoxElipse txt={'10% - 20%'} />
            <BtnCheckBoxElipse txt={'10% - 20%'} />
          </View>
          <View style={{borderBottomWidth:0.5,borderBottomColor:colors.softGray,paddingVertical:10,flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between'}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '600'}}>
                Sort by Rating
              </Text>
            </View>
            <BtnCheckBoxFilter txt={'1 - 2 Stars'} />
            <BtnCheckBoxFilter txt={'1 - 2 Stars'} />
            <BtnCheckBoxFilter txt={'1 - 2 Stars'} />
            <BtnCheckBoxFilter txt={'1 - 2 Stars'} />
          </View>
          <View style={{borderBottomWidth:0.5,borderBottomColor:colors.softGray,paddingVertical:10}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '600'}}>
                Sort by Rating
              </Text>
            </View>
            <BtnCheckBoxElipse txt={'1 - 2 Stars'} />
            <BtnCheckBoxElipse txt={'1 - 2 Stars'} />
            <BtnCheckBoxElipse txt={'1 - 2 Stars'} />
            <BtnCheckBoxElipse txt={'1 - 2 Stars'} />
          </View>
          <Btn
            txt={'apply filter'}
            onClick={() => this.props.navigation.navigate('Home')}
          />
          <View style={{marginBottom:200,}}></View>
          </ScrollView>
          
        </View>
      </View>
    );
  }
}

export default Filter;
