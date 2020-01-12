import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Timer from '../containers/Timer';



class Coconut extends Component {

  state = {
    '😃': '😃 Smiley',
    'coconut':'string',
    // 'clicks': 0,
    'coconutCount': 0
  }

  // handlePressedButton = () => {
  //   var newCount = this.state.clicks + 1 
  //   this.setState({
  //     'clicks': newCount
  //   })
  // }

  handleClickedCoconut = () => {
    var newCoconutCount = this.state.coconutCount + 1
    this.setState({
      'coconutCount' : newCoconutCount
    })
  }

  render(){

    const palmTreeImage = require('../img/palm.png'); 
    const coocnutImage = require('../img/coconut.png');
    //might not be best place to is put images 1/11  

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress= {()=> this.handleClickedCoconut()} >
           {/* placeholderforonPressEvent which lives inside TouchableOpacity Component */}
          <View>
            <Timer />
            <Image  
            style={{width: 50, height: 50}}
            source={ coocnutImage }
            /> 
          </View>
        </TouchableOpacity>
        {/* step1 able to add touchable opacity as a string, transition now into an image */}
        {/* step2 add click event to coconut so that every time you click on it, it updates the counter */}
        {/* <Image
          style={{width: 200, height: 200}}
          source={ palmTreeImage }
        /> */}
        {/* <Image 
          style={{width: 50, height: 50}}
          source={ coocnutImage }
        /> */}
        {/* <Button
          onPress={ () => {
            this.handlePressedButton()
          }}
          title="Clicks"
        /> */}
        {/* <Text>Coconuts Collected {this.state.clicks}</Text> */}
        {/* <Timer/> */}
        {/* <CountdownCircleTimer
          onComplete={() => {
              // do your stuff here
              return [true, 1500]; // repeat animation in 1.5 seconds
          }}
          isPlaying
          durationSeconds={10}
          colors={[['#A30000']]}
        /> */}
        <Text>Coconut Clicks {this.state.coconutCount}</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Coconut;


