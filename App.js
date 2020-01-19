// import React
import React, {Component} from 'react';
import { View, ImageBackground } from 'react-native';

// import custom components
import CoconutButton from './src/components/CoconutButton';
import Basket from './src/components/Basket';
import CoconutTree from './src/components/CoconutTree';
import InformationModal from './src/components/InformationModal';
import customStyles from './src/components/customStyles';

// gather images
import bgImage from './src/img/background.png'
import palm from './src/img/palm.png'
import coconut from './src/img/coconut.png'


export default class App extends Component{

  state = {
    'collectedCoconutCount': 0,
    'coconutBunch1A': true,
    'coconutBunch1B': true,
    'coconutBunch1C': true,
    'coconutBunch2A': true,
    'coconutBunch2B': true,
    'coconutBunch2C': true,
    'coconutBunch3A': true,
    'coconutBunch3B': true,
    'coconutBunch3C': true,
    'coconutBunch4A': false,
    'coconutBunch4B': false,
    'coconutBunch4C': false
  }



  // collects clicks from <CoconutTree />
  collectClick = (coconutClicks, coconutId) => {
    // updates total clicks
    this.setState({
      collectedCoconutCount: coconutClicks
    })

    // hides the clicked coconut
    this.setState({
      [coconutId]: false
    })
  }

  // callback from coconut button to trigger coconut spawn
  appLevelSpawnCoconut = () => {
    // randonly find 1 coconut to set as visible
    var currentState = this.state;
    var invisibleCoconuts = Object.keys(currentState).filter(function(key) {
      return currentState[key] === false;
    });

    var randomCoconut = invisibleCoconuts[Math.floor(Math.random() * invisibleCoconuts.length)];

    this.setState({
      [randomCoconut]: true
    });
  }

  render(){
    return (
      <ImageBackground source={bgImage} style={customStyles.backgroundContainer}>
        <CoconutTree callbackToApp={this.collectClick} treeVisibilityStatus={this.state} />
        <Basket coconutClicks={this.state.collectedCoconutCount} />
        <View style={customStyles.gameStatusBar}>
          <View style={{position: 'relative'}}>
            <CoconutButton callBackToAppSpawningNewCoconut={this.appLevelSpawnCoconut}/>
            <InformationModal/>
          </View>
        </View>
      </ImageBackground>
    )
  }
}