// import React components
import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, Dimensions } from 'react-native';

// import custom components
import CoconutButton from './src/components/CoconutButton';
import Basket from './src/components/Basket';
import CoconutTree from './src/components/CoconutTree';
import InformationModal from './src/components/InformationModal';

// gather images
import bgImage from './src/img/background.png'
import palm from './src/img/palm.png'
import coconut from './src/img/coconut.png'

// get device dimentsion
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

export default class App extends Component{

  state = {
    'coconutCountFromCoconutTree': 0
  }

  getClicksFromCoconutTree = (coconutClicks) => {
    this.setState({
      coconutCountFromCoconutTree: coconutClicks
    }) 
  }

  render(){
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <CoconutTree callBackFromCoconutTree={this.getClicksFromCoconutTree}/>

        <View style={styles.gameStatusBar}>
          <InformationModal/>
          <CoconutButton/>
          <Basket coconutClicks={this.state.coconutCountFromCoconutTree} />
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
  gameStatusBar: {
    backgroundColor: 'rgba(63, 182, 191, 0.7)',
    width: WIDTH,
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0
  }
})