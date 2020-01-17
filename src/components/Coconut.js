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
    this.setState({
      'visible': false
    });
    // send collection count & coconutId up to CoconutTree
    this.props.callbackToCoconutTree(this.state.worth, this.props.id)
    console.log(this.props.currentCoconutBoolens)
    this.findFirstCoconutClickedInObject()
  }

  findFirstCoconutClickedInObject = () => {
    let newObjectFromState = this.props.currentCoconutBoolens 
    console.log(newObjectFromState,"inside coconut with state as object")
    let firstKeyWhichSatisfiesValue = Object.keys(newObjectFromState).find(key => newObjectFromState[key] === true )
    this.turnBackOnCoconut(firstKeyWhichSatisfiesValue)
    return firstKeyWhichSatisfiesValue
  }

  turnBackOnCoconut = (firstKeyWhichSatisfiesValue) => { 
    //have value now that was most recently clicked. 
    // now turn state back on toggle back the coconut
    console.log(firstKeyWhichSatisfiesValue,"first value in array that was true")
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