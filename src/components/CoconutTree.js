// import React
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// import custom components
import Coconut from './Coconut';
import customStyles from './customStyles';

// gather images
import coconut from '../img/coconut.png'
import palm from '../img/palm.png'


class CoconutTree extends Component {
  state={
    collectedCoconutCount: 0
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
  
  handleCoconutClick = (worth, coconutId) => {
    // incrememnt number of coconuts collected for this level's state (the entire tree)
    var newCount = this.state.collectedCoconutCount + worth
    this.setState({
      collectedCoconutCount: newCount
    }) 

    // tell the App level the new count (so it can give it to the basket)
    this.props.callbackToApp(newCount, coconutId)
  }

  componentDidMount(){
    this.getData();
  }

  render(){

    return(
      <View style={customStyles.treeContainer}>
        <Image source={palm} style={customStyles.palmTree} />
          <Coconut id="coconutBunch1A" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch1A} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch1B" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch1B} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch1C" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch1C} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch2A" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch2A} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch2B" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch2B} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch2C" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch2C} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch3A" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch3A} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch3B" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch3B} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch3C" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch3C} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch4A" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch4A} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch4B" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch4B} callbackToCoconutTree={this.handleCoconutClick} />
          <Coconut id="coconutBunch4C" coconutVisibility={this.props.treeVisibilityStatus.coconutBunch4C} callbackToCoconutTree={this.handleCoconutClick} />
      </View>
    )
  }
}

export default CoconutTree;