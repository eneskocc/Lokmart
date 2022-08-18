import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class BtnCheckBoxElipse extends Component {
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
          justifyContent:'space-between',
          marginVertical: 10,
        }}
        onPress={() => this.setIsPress(true)}>
        <Text style={{fontSize: 16, lineHeight: 24,fontWeight:'500', paddingHorizontal: 10}}>
          {this.props.txt}
        </Text>
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: colors.orange,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View {...touchProps} />
        </View>
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
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.orange,
  },
});

export default BtnCheckBoxElipse;
