console.log('Starting...');
import React, {Component} from 'react';
import Coconut from './src/components/Coconut';
import CountdownTimer from './src/components/Countdown';

import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native';

// gather all images
import bgImage from './src/img/background.png'
import palm from './src/img/palm.png'
import coconut from './src/img/coconut.png'
//import coconut from './src/img/coconut-green.png'
import basket from './src/img/basket.png'

// get device dimentsion
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')
console.log(WIDTH, HEIGHT);

const App: () => React$Node = () => {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.treeContainer}>
        <Image source={palm} style={styles.palmTree} />
        <Image source={coconut} style={styles.coconutBunch1A} />
        <Image source={coconut} style={styles.coconutBunch1B} />
        <Image source={coconut} style={styles.coconutBunch1C} />
        <Image source={coconut} style={styles.coconutBunch2A} />
        <Image source={coconut} style={styles.coconutBunch2B} />
        <Image source={coconut} style={styles.coconutBunch2C} />
        <Image source={coconut} style={styles.coconutBunch3A} />
        <Image source={coconut} style={styles.coconutBunch3B} />
        <Image source={coconut} style={styles.coconutBunch3C} />
        <Image source={coconut} style={styles.coconutBunch4A} />
        <Image source={coconut} style={styles.coconutBunch4B} />
        <Image source={coconut} style={styles.coconutBunch4C} />
      </View>
      <View style={styles.gameStatusBar}>
        <Coconut/>
        <View style={styles.basket}>
          <Image source={basket} style={styles.basketImage} />
          <View style={styles.basketCircle}>
            <Text style={styles.basketCount}>9999</Text>
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
        <Text>Game status goes here</Text>
        <CountdownTimer/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  treeContainer: {
    position: 'relative',
    width: WIDTH - 55,
    height: HEIGHT,
  },
  // palmTree: {
  //   flex: 1,
  //   width: undefined,
  //   height: undefined,
  //   resizeMode: 'contain',
  // },
  palmTree: {
    position: 'absolute',
    width: '100%',
    left: 0,
    height: WIDTH * 1.79, // aspect ratio of tree
    resizeMode: 'contain',
    zIndex: 1,
  },
  coconutBunch1A: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 162,
    top: 210,
    zIndex: 10,
  },
  coconutBunch1B: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 122,
    top: 210,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch1C: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 152,
    top: 240,
    transform: [{ rotate: '170deg' }],
    zIndex: 9,
  },
  coconutBunch2A: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 55,
    top: 230,
    transform: [{ rotate: '20deg' }],
    zIndex: 10,
  },
  coconutBunch2B: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 70,
    top: 200,
    zIndex: 10,
  },
  coconutBunch2C: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 40,
    top: 190,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch3A: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 220,
    top: 160,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch3B: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 250,
    top: 160,
    zIndex: 10,
  },
  coconutBunch3C: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 230,
    top: 180,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch4A: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 120,
    top: 110,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch4B: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 90,
    top: 100,
    zIndex: 10,
  },
  coconutBunch4C: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 105,
    top: 130,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  gameStatusBar: {
    backgroundColor: 'rgba(63, 182, 191, 0.7)',
    width: WIDTH,
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
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



export default App;
