import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class CategoriesHorizontalCard extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 10, marginVertical: 15}}>
        <View
          style={{
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.2,
            borderColor: colors.softGray,
            backgroundColor: colors.white,
            borderRadius: 10,
          }}>
          <Image style={{width: 65, height: 65}} source={this.props.img} />
        </View>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            fontWeight: '600',
            color: colors.dark,
            paddingVertical: 10,
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
            paddingVertical: 1,
            paddingHorizontal: 2,
          }}>
          {this.props.item}
        </Text>
      </View>
    );
  }
}

export default CategoriesHorizontalCard;
