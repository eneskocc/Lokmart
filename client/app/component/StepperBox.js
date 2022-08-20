import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class StepperBox extends Component {
  state = {
    isPress1: this.props.is1,
    isPress2: this.props.is2,
    isPress3: this.props.is3,
  };

  setIsPress1 = visible => {
    this.setState({isPress1: visible, isPress1: visible});
  };
  setIsPress2 = visible => {
    this.setState({isPress2: visible, isPress2: visible});
  };
  setIsPress3 = visible => {
    this.setState({isPress3: visible, isPress3: visible});
  };
  render() {
    const {isPress1, isPress2, isPress3} = this.state;
    var bg = this.props.color;
    var touchProps1 = {
      activeOpacity: 1,
      style: isPress1 ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress1(false),
      onShowUnderlay: () => setIsPress1(true),
    };
    var touchProps2 = {
      activeOpacity: 1,
      style: isPress2 ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress2(false),
      onShowUnderlay: () => setIsPress2(true),
    };
    var touchPropsBorder1 = {
      activeOpacity: 1,
      style: isPress2 ? styles.borderPress : styles.borderNormal,
      onHideUnderlay: () => setIsPress2(false),
      onShowUnderlay: () => setIsPress2(true),
    };
    var touchPropsBorder2 = {
      activeOpacity: 1,
      style: isPress3 ? styles.borderPress : styles.borderNormal,
      onHideUnderlay: () => setIsPress2(false),
      onShowUnderlay: () => setIsPress2(true),
    };
    var touchProps3 = {
      activeOpacity: 1,
      style: isPress3 ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress3(false),
      onShowUnderlay: () => setIsPress3(true),
    };
    return (
        <View style={{paddingVertical: 20,}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '8%',
          alignItems: 'center',
          
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor:colors.gray,
            borderRadius:10
          }}
          onPress={() => this.setIsPress1(true)}>
          <View
            style={{
              width: 35,
              height: 35,
              borderWidth: 1,
              borderColor: colors.gray,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              {...touchProps1}
              source={require('../assets/images/welcome/Vector.png')}
            />
          </View>
        </TouchableOpacity>

        <View {...touchPropsBorder1}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor:colors.gray,
            borderRadius:10
          }}
          onPress={() => this.setIsPress2(true)}>
          <View
            style={{
              width: 35,
              height: 35,
              borderWidth: 1,
              borderColor: colors.gray,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              {...touchProps2}
              source={require('../assets/images/welcome/Vector.png')}
            />
          </View>
        </TouchableOpacity>
        <View {...touchPropsBorder2}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            backgroundColor:colors.gray,
            borderRadius:10
          }}
          onPress={() => this.setIsPress3(true)}>
          <View
            style={{
              width: 35,
              height: 35,
              borderWidth: 1,
              borderColor: colors.gray,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              {...touchProps3}
              source={require('../assets/images/welcome/Vector.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '6%',
          alignItems: 'center',
        }}>
            <Text>Delivery</Text>
            <Text>Address</Text>
            <Text>Payment</Text>
        </View>
      </View>
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
    width: 35,
    height: 35,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  borderNormal: {
    borderWidth: 1,
    borderColor: colors.gray,
    width: 110,
    height: 1,
  },
  borderPress: {
    borderWidth: 1,
    borderColor: colors.orange,
    width: 110,
    height: 1,
  },
});

export default StepperBox;
