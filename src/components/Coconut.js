import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import customStyles from './customStyles';

// import images
import coconutImg from '../img/coconut.png'

class Coconut extends Component {
	state = {
    'visible': false,
    'worth': 1
    };

  handleCoconutClick = () => {
    // hide the coconut
    this.setState({
      'visible': false
    });
    // send collection count & coconutId up to CoconutTree
    this.props.sendCountAndIdToCoconutTree(this.state.worth, this.props.id)
    // this.findFirstCoconutClickedInObject()
  }

	render(){
		if(this.state.visible || this.props.coconutVisibility){
			output = <TouchableOpacity onPress={this.handleCoconutClick} style={customStyles[this.props.id + "Touchable"]}><Image source={coconutImg} style={customStyles.coconut} /></TouchableOpacity>;
		}else{
      output =  null
    }

		return(
			<View style={customStyles.coconutWrapper}>
				{output}
			</View>
		)
	}
}

export default Coconut;
