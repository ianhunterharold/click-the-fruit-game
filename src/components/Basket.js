import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Basket extends Component{

  state={
    treeCoconutCount: 0
  }

  render(){
    return(
      <View>
      <Text>{this.state.treeCoconutCount}</Text>
      </View>
    )
  }
}

export default Basket;