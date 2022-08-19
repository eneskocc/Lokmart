import { Text, StyleSheet, View, Dimensions, FlatList, Image } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../config';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Swiper extends Component {
  render() {
    return (
      <FlatList
        style={styles.swiper}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        data={this.props.data}
        renderItem={({ item, index }) => (
          <View style={styles.swiperItem} key={index}>
            <Image style={styles.icon} source={item.img} />
            <View style={{flexDirection:'row',alignItems:'center'}}>
              {this.props.data.map((item,indexDot) =>
                <View
                  style={{
                    width: indexDot == index ?30:15,
                    marginVertical:10,
                    marginHorizontal:3,
                    height: indexDot == index ?13:11,
                    borderRadius:15,
                    backgroundColor: indexDot == index ? colors.orange: colors.gray,
                  }}
                />)}
            </View>
          </View>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins',
    fontWeight: '700',
    textAlign: 'center'
  },
  swiper: {
    width: windowWidth,
    backgroundColor:colors.white
  },
  swiperItem: {
    width: windowWidth,
    alignItems: 'center',
  },
  icon: {
    width: '90%',
    height: 240,
    borderRadius:15,
    marginTop:15,
    resizeMode: 'cover',
  },
})