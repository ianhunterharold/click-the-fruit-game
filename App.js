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

<<<<<<< HEAD

=======
// get device dimentsion
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')
>>>>>>> state-of-coconut-routed-to-app-then-down-to-counter
export default class App extends Component{

  state = {
    'collectedCoconutCount': 0,
    'coconutBunch1A': false,
    'coconutBunch1B': false,
    'coconutBunch1C': false,
    'coconutBunch2A': false,
    'coconutBunch2B': false,
    'coconutBunch2C': false,
    'coconutBunch3A': false,
    'coconutBunch3B': false,
    'coconutBunch3C': false,
    'coconutBunch4A': false,
    'coconutBunch4B': false,
    'coconutBunch4C': false
        //all individual coconut states
  }

  // collects clicks from <CoconutTree />
  collectClick = (coconutClicks, coconutId) => {
    this.setState({
      collectedCoconutCount: coconutClicks
    })

    this.setState({
      [coconutId]: true
      //true meaning that the coconut has been clicked and it disapears
    })
  }

  //callback from coconut button that says hey, we are at zero, spaw new loco cocos 
  appLevelSpawnCoconut = () => {
    var totalState = this.state
  }

  render(){
    return (
      <ImageBackground source={bgImage} style={customStyles.backgroundContainer}>
        <CoconutTree callbackToApp={this.collectClick} coconutIdBoolean={this.state} />
        <View style={customStyles.gameStatusBar}>
          <InformationModal/>
          <CoconutButton callBackToAppSpawningNewCoconut={this.appLevelSpawnCoconut}/>
          <Basket coconutClicks={this.state.collectedCoconutCount} />
        </View>
      </ImageBackground>
    )
  }
}