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
    'collectedCoconuts': 0,
    'currentStateOfCoconuts': null
  }

  handleCoconutClick = (worth, coconutId) => {
    // incrememnt number of coconuts collected for this level's state (the entire tree)
    var newCount = this.state.collectedCoconuts + worth
    this.setState({
      collectedCoconuts: newCount
    }) 

    // tell the App level the new count (so it can give it to the basket)
    this.props.callbackToApp(newCount, coconutId)
  }

  componentDidUpdate(prevProps) {
    //must compare old props and new props or will spiral into infinite loop
    // when props change, state is updated in coconut tree with the new state of all the clicked

    if (this.props.coconutIdBoolean !== prevProps.coconutIdBoolean) {
      this.setState({
        'currentStateOfCoconuts':this.props.coconutIdBoolean
      })
    }
    console.log(this.state.currentStateOfCoconuts,'current state of coconuts should be all of the updated states')
  }

  render(){

    return(
      <View style={styles.treeContainer}>
        <Image source={palm} style={styles.palmTree} />
        <View style={styles.coconutsContainer}>
          <Coconut id="coconutBunch1A" currentCoconutBoolens={this.state.currentStateOfCoconuts}   callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch1B" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch1C" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch2A" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch2B" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch2C" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch3A" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch3B" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch3C" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch4A" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch4B" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch4C" currentCoconutBoolens={this.state.currentStateOfCoconuts}  callbackToCoconutTree={this.handleCoconutClick} />
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