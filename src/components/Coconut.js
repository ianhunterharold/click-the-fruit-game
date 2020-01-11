import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

class Coconut extends Component {

  state = {
    '😃': '😃 Smiley',
    'coconut':'string',
    'clicks': 0
  }

  handlePressedButton = () => {
    var newCount = this.state.clicks + 1 
    this.setState({
      'clicks': newCount
    })
  }

  // componentDidMount = () => {
  //   this.updatingCoconutToImage();
  // }

  // updatingCoconutToImage = () => {
  //   const coocnutImage = require('../../ios/img/coconut.png');
  //   this.setState = {
  //     'coconut' : coocnutImage
  //   }
  // }

  render(){

    const palmTreeImage = require('../../ios/img/palm.png'); 
    const coocnutImage = require('../../ios/img/coconut.png');
    //might not be best place to put images 1/11  

    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={ palmTreeImage }
        />
        <Image 
          style={{width: 50, height: 50}}
          source={ coocnutImage }
        />
        <Button
          onPress={ () => {
            this.handlePressedButton()
          }}
          title="Clicks"
        />
        <Text>Coconuts Collected {this.state.clicks}</Text>
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


