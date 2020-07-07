// import React
import React, {Component} from 'react';
import { View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';

// import custom components
import CoconutButton from './src/components/CoconutButton';
import Basket from './src/components/Basket';
import CoconutTree from './src/components/CoconutTree';
import InformationModal from './src/components/InformationModal';
import customStyles from './src/components/customStyles';

// gather images
import bgImage from './src/img/background.png'

export default class App extends Component{
  state = {
    'iconAnimating': true,
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

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@collectedCoconutCount')
      if(value !== null) {
        this.setState({
          collectedCoconutCount: parseInt(value)
        });
      }
    } catch(e) {
      // error reading value
    }
  }

  // collects clicks from <CoconutTree />
  collectClick = (coconutClicks, coconutId) => {
    // updates total clicks
    this.setState({
      collectedCoconutCount: coconutClicks
    })

    // stores asyncronously
    storeData = async () => {
      try {
        await AsyncStorage.setItem('@collectedCoconutCount', `${coconutClicks}`);
      } catch (e) {
        // saving error
        console.log('error with async storage');
      }
    }
    storeData();

    // hides the clicked coconut
    this.setState({
      [coconutId]: false
    })
  }

  // callback from coconut button to trigger coconut spawn
  spawnCoconut = () => {
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
  
  componentDidMount(){
    SplashScreen.hide();
    this.getData();
  }

  render(){
    return (
      <>
        <ImageBackground
          source={bgImage}
          style={customStyles.backgroundContainer}>
          <CoconutTree
            collectClick={this.collectClick}
            treeVisibilityStatus={this.state}
          />
          <Basket coconutClicks={this.state.collectedCoconutCount} />
          <View style={customStyles.gameStatusBar}>
            <View style={{position: 'relative'}}>
              <CoconutButton spawnCoconut={this.spawnCoconut} />
              <InformationModal />
            </View>
          </View>
        </ImageBackground>
      </>
    );
  }
}