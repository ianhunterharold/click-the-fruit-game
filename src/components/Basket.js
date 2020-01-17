import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import customStyles from './customStyles';


// import images
import basket from '../img/basket.png'
import coconut from '../img/coconut.png'

class Basket extends Component{

  render(){
    return(
      <View style={customStyles.basket}>
        <Image source={basket} style={customStyles.basketImage} />
        <View style={customStyles.basketCircle}>
          <Text style={customStyles.basketCount}>{this.props.coconutClicks}</Text>
        </View>
        <View style={customStyles.basketCoconuts}>
          <Image source={coconut} style={customStyles.basketCoconut1} />
          <Image source={coconut} style={customStyles.basketCoconut2} />
          <Image source={coconut} style={customStyles.basketCoconut3} />
          <Image source={coconut} style={customStyles.basketCoconut4} />
          <Image source={coconut} style={customStyles.basketCoconut5} />
          <Image source={coconut} style={customStyles.basketCoconut6} />
        </View>
      </View>
    )
  }
}

export default Basket;