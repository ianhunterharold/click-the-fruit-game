// import React
import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

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
      output = <TouchableOpacity onPress={this.handleCoconutClick}><Image source={coconutImg} style={styles[this.props.id]} /></TouchableOpacity>;
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
	coconutBunch1A: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 162,
    top: 210,
    zIndex: 10,
  },
  coconutBunch1B: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 122,
    top: 210,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch1C: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 152,
    top: 240,
    transform: [{ rotate: '170deg' }],
    zIndex: 9,
  },
  coconutBunch2A: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 55,
    top: 230,
    transform: [{ rotate: '20deg' }],
    zIndex: 10,
  },
  coconutBunch2B: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 70,
    top: 200,
    zIndex: 10,
  },
  coconutBunch2C: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 40,
    top: 190,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch3A: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 220,
    top: 160,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch3B: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 250,
    top: 160,
    zIndex: 10,
  },
  coconutBunch3C: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 230,
    top: 180,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch4A: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 120,
    top: 110,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
  coconutBunch4B: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 90,
    top: 100,
    zIndex: 10,
  },
  coconutBunch4C: {
    position: 'absolute',
    width: 46,
    height: 50,
    left: 105,
    top: 130,
    transform: [{ rotate: '90deg' }],
    zIndex: 10,
  },
})


export default Coconut;