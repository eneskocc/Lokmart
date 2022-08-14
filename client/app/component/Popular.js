import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';
import PopularCard from './PopularCard';

export class Popular extends Component {
  render() {
    return (
      <View style={{width: '100%', paddingVertical: 10}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, lineHeight: 22, fontWeight: '700'}}>
            Popular Deals
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '600',
                color: colors.orange,
              }}>
              Show all {'>'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <PopularCard
            name={'Banana'}
            price={'15$'}
            ratings={'97 Ratings'}
            img={require('../assets/images/ic/img.png')}
          />
          <PopularCard
            name={'Chicken'}
            item={'15$'}
            ratings={'97 Ratings'}
            img={require('../assets/images/ic/img.png')}
          />
          <PopularCard
            name={'Fish'}
            item={'15$'}
            ratings={'97 Ratings'}
            img={require('../assets/images/ic/img.png')}
          />
          <PopularCard
            name={'Dairy'}
            item={'15$'}
            ratings={'97 Ratings'}
            img={require('../assets/images/ic/img.png')}
          />
          <PopularCard
            name={'Vegetable'}
            item={'15$'}
            ratings={'97 Ratings'}
            img={require('../assets/images/ic/img.png')}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Popular;
