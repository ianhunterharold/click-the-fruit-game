import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

// gather images
import coconut from '../img/coconut.png'
import palm from '../img/palm.png'

// get device dimentsion
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

class CoconutTree extends Component {

  state = {
    'clickedCoconuts':0
  }

  handleClickedCoconut = () => {
    this.setState({
      'clickedCoconuts': this.state.clickedCoconuts + 1 
    })
    this.props.callBackFromCoconutTree(this.state.clickedCoconuts)
  }

  render(){
    return(
      <View style={styles.treeContainer}>
        <Image source={palm} style={styles.palmTree} />
        
        <View style={styles.coconutsContainer}>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch1A} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch1B} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch1C} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch2A} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch2B} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch2C} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch3A} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch3B} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch3C} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch4A} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch4B} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> 
            this.handleClickedCoconut()} >
            <Image source={coconut} style={styles.coconutBunch4C} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  coconutsContainer: {
    zIndex: 9999
  },
  treeContainer: {
    position: 'relative',
    width: WIDTH - 55,
    height: HEIGHT,
  },
  palmTree: {
    position: 'absolute',
    width: '100%',
    left: 0,
    height: WIDTH * 1.79, // aspect ratio of tree
    resizeMode: 'contain',
    zIndex: 1,
  },
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

export default CoconutTree;