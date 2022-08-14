import {Text, View, Image,SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';


export class CategoriesProductCard extends Component {
  render() {
    return (
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          paddingHorizontal: '5%',
        }}>
        <View
          style={{
            width: '100%',
            height: 100,
            alignItems: 'center',
            paddingHorizontal: '4%',
            flexDirection: 'row',
            borderWidth: 0.2,
            borderColor: colors.softGray,
            backgroundColor: colors.white,
            borderRadius: 10,
          }}>
          <Image style={{width: 65, height: 65}} source={this.props.img} />
          <View style={{paddingHorizontal: '8%'}}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '600',
                color: colors.dark,

                paddingHorizontal: 2,
              }}>
              {this.props.header}
            </Text>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontWeight: '400',
                color: colors.softGray,
                paddingHorizontal: 2,
              }}>
              {this.props.item}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CategoriesProductCard;
