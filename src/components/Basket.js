import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing, Dimensions } from 'react-native';
import customStyles from './customStyles';


// import images
import basket from '../img/basket.png'
import coconut from '../img/coconut.png'

// get dimensions
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

// set static tree sizes depending on device dimensions
if((HEIGHT - 100) > 750){ // 100 is status bar height
  var treeHeight = 642;
}else{
  var treeHeight = 500;
}
var treeWidth = treeHeight * 0.556;
var treeOffset = (WIDTH - treeWidth)/2;
var coconutWidth = treeWidth * 0.13;
var coconutHeight = coconutWidth * 1.08;



class Basket extends Component{
  constructor () {
    super()
    this.springValue = new Animated.Value(1)
  }
  spring () {
    this.springValue.setValue(0.7)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
        tension: 20,
      }
    ).start()
  }

  componentDidUpdate(prevProps){
    if(prevProps.coconutClicks !== this.props.coconutClicks){
      this.spring();
    }
  }

  
  render(){
    return(
      <View style={{ width: 180, height: 76, position: 'absolute', top: treeHeight + 50, right: treeOffset, alignItems: 'center' }}>
        <Image source={basket} style={customStyles.basketImage} />

        <Animated.View style={{ transform: [{scale: this.springValue}], position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
        <View style={customStyles.basketCircle}>
          <Text style={customStyles.basketCount}>{this.props.coconutClicks}</Text>
        </View>
        </Animated.View>
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