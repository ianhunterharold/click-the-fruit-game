import React, {Component} from 'react';
import CoconutButton from './src/components/CoconutButton';
import Basket from './src/components/Basket';
import TreeCoconut from './src/components/TreeCoconut';
import InformationModal from './src/components/InformationModal';

import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native';

// gather images
import bgImage from './src/img/background.png'
import palm from './src/img/palm.png'
import coconut from './src/img/coconut.png'

// get device dimentsion
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

export default class App extends Component{

  state = {
    'coconutCountFromTreeCoconut': 0
  }

  getClicksFromTreeCoconut = (coconutClicks) => {
    this.setState({
      coconutCountFromTreeCoconut: coconutClicks
    }) 
  }

  render(){
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.treeContainer}>
          <Image source={palm} style={styles.palmTree} />
          <TreeCoconut callBackFromCocoNutTree={this.getClicksFromTreeCoconut}/>
        </View>
        <View style={styles.gameStatusBar}>
          <InformationModal/>
          <CoconutButton/>
          <Basket coconutClicks={this.state.coconutCountFromTreeCoconut} />
        </View>
      </ImageBackground>
    )
  }
}

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
  palmTree: {
    position: 'absolute',
    width: '100%',
    left: 0,
    height: WIDTH * 1.79, // aspect ratio of tree
    resizeMode: 'contain',
    zIndex: 1,
  },
  gameStatusBar: {
    backgroundColor: 'rgba(63, 182, 191, 0.7)',
    width: WIDTH,
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0
  }
})