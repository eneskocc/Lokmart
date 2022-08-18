import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class BtnCheckBoxFilter extends Component {
  state = {
    isPress: false,
    isPress1: false,
  };

  setIsPress = visible => {
    this.setState({isPress: visible, isPress1: visible});
  };
  render() {
    const {isPress} = this.state;
    var bg = this.props.color;
    var touchProps = {
      activeOpacity: 1,
      underlayColor: 'blue', // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => console.log('HELLO'), // <-- "onPress" is apparently required
    };
    var touchProps2 = {
      activeOpacity: 1,
      underlayColor: 'blue', // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.txtPress : styles.txtNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => console.log('HELLO'), // <-- "onPress" is apparently required
    };
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          width:'40%'
        }}
        onPress={() => this.setIsPress(true)}>
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: colors.softGray,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            {...touchProps}
            source={require('../assets/images/welcome/Vector.png')}
          />
        </View>
        <Text style={{fontSize: 16, lineHeight: 22, paddingHorizontal: 10}}>
          {this.props.txt}
        </Text>
      </TouchableOpacity>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNormal: {
    width: 0,
    height: 0,
  },
  btnPress: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
 
});

export default BtnCheckBoxFilter;
