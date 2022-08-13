import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

class SearchBox extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: colors.softGray,
            borderRadius: 10,
            marginVertical: 10,
            width: '70%',
            paddingVertical: 6,
            paddingHorizontal:10
          }}>
          <TouchableOpacity onPress={this.props.onClick}>
            <Image
              source={require('../assets/images/home/search.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>
          <TextInput
            style={{flex: 1}}
            placeholder="Search"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          onPress={this.props.onClick}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: colors.softGray,
            borderRadius: 10,
            marginVertical: 10,
            paddingVertical: 6,
            paddingHorizontal:10
          }}>
          <Image
            source={require('../assets/images/home/filter.png')}
            style={styles.ImageStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.orange,
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    padding: 9,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 5,
    width: 5,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});

export default SearchBox;
