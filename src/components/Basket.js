import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import customStyles from './customStyles';

// import images
import basket from '../img/basket.png'
import coconut from '../img/coconut.png'



class Basket extends Component{

  // added constructor class so that we initialized springValue
  constructor () {
    super()
    this.springValue = new Animated.Value(0.3)
  }

  spring = () => { 
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
        //tension and friction help with spring animation 
      }
    ).start()
  }

  componentDidMount(){
    console.log('springggg');
    this.spring()
  }
  // componentDidUpdate(prevProps){
    
  // }

  render(){
    return(
      <>  
      {/* added fragment so that return only returns a single jsx element */}
      <View style={customStyles.basket} >
          <Image source={basket} style={customStyles.basketImage} />
          <View style={customStyles.basketCircle}>
          <Text style={customStyles.basketCount}>{this.props.coconutClicks}</Text>
        </View>
        <View style={customStyles.basketCoconuts}>
          <Image source={coconut} style={customStyles.basketCoconut1}/>
          <Image source={coconut} style={customStyles.basketCoconut2} />
          <Image source={coconut} style={customStyles.basketCoconut3} />
          <Image source={coconut} style={customStyles.basketCoconut4} />
          <Image source={coconut} style={customStyles.basketCoconut5} />
          <Image source={coconut} style={customStyles.basketCoconut6} />
        </View>
      </View>
      </>
    )
  }
}

export default Basket;