console.log('Starting...');
import React, {Component} from 'react';
import Coconut from './src/components/Coconut';

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
  }
});



export default App;
