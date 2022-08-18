import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export class RecentSearchCard extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>{this.props.txt}</Text>
        <TouchableOpacity>
          <Image
            style={{width: 15, height: 15, marginHorizontal: 5}}
            source={require('../assets/images/ic/ok.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default RecentSearchCard;
