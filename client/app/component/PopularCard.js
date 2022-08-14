import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class PopularCard extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 5, marginVertical: 10}}>
        <Image
          style={{width: 140, height: 120, borderRadius: 10}}
          source={this.props.img}
        />
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            fontWeight: '600',
            color: colors.dark,
            paddingVertical: 10,
            paddingHorizontal: 2,
          }}>
          {this.props.name}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: colors.softGray,
                padding: 2,
              }}>
              <Image
                style={{width: 10, height: 10}}
                source={require('../assets/images/ic/star.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 18,
                  fontWeight: '500',
                  color: colors.dark,
                }}>
                4.5
              </Text>
            </View>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontWeight: '500',
                color: colors.orange,
                paddingVertical: 10,
                paddingHorizontal: 2,
              }}>
              {this.props.ratings}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 16,
              lineHeight: 18,
              fontWeight: '500',
              color: colors.dark,
              paddingVertical: 10,
              paddingHorizontal: 2,
            }}>
            {this.props.price}
          </Text>
        </View>
      </View>
    );
  }
}

export default PopularCard;
