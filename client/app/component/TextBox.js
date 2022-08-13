import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import { colors } from '../config';

class TextBox extends Component {
  render() {
    return (
      <View style={styles.SectionStyle}>
        <Image source={this.props.img1} style={styles.ImageStyle} />
        <TextInput
          style={{flex: 1}}
          placeholder={this.props.txt}
          underlineColorAndroid="transparent"
        />
        <Image source={this.props.img2} style={styles.hide} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.gray1,
    borderColor: '#000',
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
    padding: 9,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  hide: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});

export default TextBox;
