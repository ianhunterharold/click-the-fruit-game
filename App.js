// import React
import React, {Component} from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';

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
    'collectedCoconutCount': 0
  }

  // collects clicks from <CoconutTree />
  collectClick = (coconutClicks) => {
    this.setState({
      collectedCoconutCount: coconutClicks
    }) 
  }

  render(){
    return (
      <ImageBackground source={bgImage} style={customStyles.backgroundContainer}>
        <CoconutTree callbackToApp={this.collectClick} />

        <View style={customStyles.gameStatusBar}>
          <InformationModal/>
          <CoconutButton/>
          <Basket coconutClicks={this.state.collectedCoconutCount} />
        </View>
      </ImageBackground>
    )
  }
}