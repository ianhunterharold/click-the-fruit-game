// import React
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

// import custom components
import Coconut from './Coconut';

// gather images
import coconut from '../img/coconut.png'
import palm from '../img/palm.png'

// get device dimentsion
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

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
      <View style={styles.treeContainer}>
        <Image source={palm} style={styles.palmTree} />
        
        <View style={styles.coconutsContainer}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  coconutsContainer: {
    zIndex: 9999
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
})

export default CoconutTree;