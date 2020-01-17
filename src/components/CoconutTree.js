// import React
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// import custom components
import Coconut from './Coconut';
import customStyles from './customStyles';

// gather images
import coconut from '../img/coconut.png'
import palm from '../img/palm.png'


class CoconutTree extends Component {

  state = {
    'collectedCoconuts': 0
  }

  handleCoconutClick = (worth) => {
    // incrememnt number of coconuts collected for this level's state (the entire tree)
    var newCount = this.state.collectedCoconuts + worth
    this.setState({
      collectedCoconuts: newCount
    }) 

    // tell the App level the new count (so it can give it to the basket)
    this.props.callbackToApp(newCount)
  }

  render(){
    return(
      <View style={customStyles.treeContainer}>
        <Image source={palm} style={customStyles.palmTree} />
        
        <Coconut id="coconutBunch1A" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch1B" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch1C" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch2A" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch2B" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch2C" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch3A" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch3B" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch3C" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch4A" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch4B" callbackToCoconutTree={this.handleCoconutClick} />
        <Coconut id="coconutBunch4C" callbackToCoconutTree={this.handleCoconutClick} />
      </View>
    )
  }
}

export default CoconutTree;