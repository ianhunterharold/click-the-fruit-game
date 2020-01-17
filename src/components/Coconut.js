// import React
import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import customStyles from './customStyles';


// import images
import coconutImg from '../img/coconut.png'


class Coconut extends Component {
	state = {
    'visible': true,
    'worth': 1
  };

  handleCoconutClick = () => {
  	// hide the coconut
  	this.setState({'visible': false});

    // send collection count up to CoconutTree
    this.props.callbackToCoconutTree(this.state.worth)
  }


	render(){
		if(this.state.visible){
			output = <TouchableOpacity onPress={this.handleCoconutClick} style={customStyles[this.props.id + "Touchable"]}><Image source={coconutImg} style={customStyles.coconut} /></TouchableOpacity>;
		}else{
			output = <View></View>
		}

		return(
			<View style={customStyles.coconutWrapper}>
				{output}
			</View>
		)
	}
}


export default Coconut;