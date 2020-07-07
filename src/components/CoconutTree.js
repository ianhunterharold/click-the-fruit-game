// import React
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// import custom components
import Coconut from './Coconut';
import customStyles from './customStyles';

// gather images
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
    this.props.collectClick(newCount, coconutId);
  }

  componentDidMount(){
    this.getData(); 
    // when we load coconut tree we get integer from async storage
  }

  render(){
    const coconutIds = [
      '1A',
      '1B',
      '1C',
      '2A',
      '2B',
      '2C',
      '3A',
      '3B',
      '3C',
      '4A',
      '4B',
      '4C'
    ];

    const coconutElements = coconutIds.map(id => (
      <Coconut
        key={id}
        id={`coconutBunch${id}`}
        coconutVisibility={
          this.props.treeVisibilityStatus[`coconutBunch${id}`]
        }
        sendCountAndIdToCoconutTree={this.handleCoconutClick}
      />
    ));
    return(
      <View style={customStyles.treeContainer}>
        <Image source={palm} style={customStyles.palmTree} />
          {coconutElements}
      </View>
    )
  }
}

export default CoconutTree;
