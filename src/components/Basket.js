import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// import images
import basket from '../img/basket.png'
import coconut from '../img/coconut.png'

class Basket extends Component{

  state={
    treeCoconutCount: 0
  }

  render(){
    return(
      <View style={styles.basket}>
        <Image source={basket} style={styles.basketImage} />
        <View style={styles.basketCircle}>
          <Text style={styles.basketCount}>{this.state.treeCoconutCount}</Text>
        </View>
        <View style={styles.basketCoconuts}>
          <Image source={coconut} style={styles.basketCoconut1} />
          <Image source={coconut} style={styles.basketCoconut2} />
          <Image source={coconut} style={styles.basketCoconut3} />
          <Image source={coconut} style={styles.basketCoconut4} />
          <Image source={coconut} style={styles.basketCoconut5} />
          <Image source={coconut} style={styles.basketCoconut6} />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  basket: {
    width: '35%',
    height: 70,
    position: 'absolute',
    bottom: 14,
    right: 10,
    alignItems: 'center',
  },
  basketCoconuts: {
    position: 'absolute',
    top: -30,
    left: 0,
    zIndex: 1,
    width: '100%'
  },
  basketCoconut1: {
    width: 46,
    height: 50,
    position: 'absolute',
    top: 10,
    zIndex: 3
  },
  basketCoconut2: {
    width: 46,
    height: 50,
    position: 'absolute',
    top: 0,
    left: 22,
    transform: [{ rotate: '10deg' }],
    zIndex: 4
  },
  basketCoconut3: {
    width: 46,
    height: 50,
    position: 'absolute',
    top: 0,
    left: 44,
    transform: [{ rotate: '50deg' }],
    zIndex: 3
  },
  basketCoconut4: {
    width: 46,
    height: 50,
    position: 'absolute',
    top: 8,
    left: 66,
    transform: [{ rotate: '15deg' }],
    zIndex: 4
  },
  basketCoconut5: {
    width: 46,
    height: 50,
    position: 'absolute',
    top: 0,
    left: 85,
    transform: [{ rotate: '35deg' }],
    zIndex: 3
  },
  basketCoconut6: {
    width: 46,
    height: 50,
    position: 'absolute',
    top: 5,
    right: 0,
    transform: [{ rotate: '70deg' }],
    zIndex: 4
  },
  basketImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: 2
  },
  basketCircle: {
    width: 75,
    height: 75,
    borderRadius: 75/2,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderColor: 'rgba(232, 90, 80, 1)',
    borderStyle: 'solid',
    borderWidth: 3,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(191, 114, 42, 0.7)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    zIndex: 3
  },
  basketCount: {
    fontSize: 20,
    color: '#000'
  }
});

export default Basket;