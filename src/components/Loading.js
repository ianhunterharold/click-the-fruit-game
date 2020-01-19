import React, { Component } from 'react';
import { Image, View } from 'react-native'
import coconut from '../img/coconut.png';
import customStyles from './customStyles';

class Loading extends Component{

  render(){
    return(
      <View style={customStyles.loadingCoconutContainer}>
      <Image style={customStyles.loadingCoconut} source={ coconut } />
      </View>
    )
  }
}



export default Loading;