import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import coconutImg from '../img/coconut.png'


class Coconut extends Component {
	state = {
    'visible': true
  };

  handleClickedCoconut = () => {
  	// hide the coconut
  	this.setState({'visible': false});

  	// add it to the list of available coconuts to spwan
  }


	render(){
		if(this.state.visible){
			output = <TouchableOpacity onPress={this.handleClickedCoconut}><Image source={coconutImg} style={styles.coconutImg} /></TouchableOpacity>;
		}else{
			output = <View></View>
		}

		return(
			<View>
				{output}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	coconutImg: {
		width: 90,
		height: 90,
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 9999999
	}
})


export default Coconut;