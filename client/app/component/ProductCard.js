import {Text, View, Image, SafeAreaView,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class ProductCard extends Component {
  render() {
    return (
      <TouchableOpacity
      onPress={this.props.onClick}
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          paddingHorizontal: '5%',
          paddingVertical:10,
        }}>
        <View
          style={{
            width: '100%',
            height: 100,
            alignItems: 'center',
            paddingHorizontal: '4%',
            flexDirection: 'row',
            borderBottomColor: colors.softGray,
            borderBottomWidth: 0.61,
            backgroundColor: colors.white,
          }}>
          <Image style={{width: 85, height: 85,borderRadius:10}} source={this.props.img} />
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
            <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'space-between'}}>
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: colors.softGray,
                  paddingHorizontal: 4,
                  paddingVertical: 3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical:4,
                }}>
                <Image
                  style={{width: 10, height: 10, marginHorizontal: 5}}
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
      </TouchableOpacity>
    );
  }
}

export default ProductCard;
