import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Linking, Button, Image} from 'react-native';


const logo = require('../img/coco-loco-logo.png');


class InformationModal extends Component{
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{zIndex: 2}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          presentationStyle="overFullScreen"
          >
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            style={styles.hideButton}>
            <Text style={styles.hideButtonText}>X</Text>
          </TouchableHighlight>
          <View style={styles.modalContainer}>
          	<View style={styles.main}>
	            <Image source={logo} />
  	          <Text style={{textAlign: 'center', marginTop: 40, fontSize: 20, color: '#47b9c1', fontWeight: 'bold', marginBottom: 3}} onPress={ ()=> Linking.openURL('https://brianshaffer.com/cocoloco-store-redirect') }>Rate Us</Text>
    	        <Text style={{textAlign: 'center', marginBottom: 20}} onPress={ ()=> Linking.openURL('https://brianshaffer.com/cocoloco-store-redirect') }>⭐️⭐️⭐️⭐️⭐️</Text>
    	      </View>

            <View style={styles.author}>
              <Text style={styles.authors}>Created by <Text onPress={ ()=> Linking.openURL('https://brianshaffer.com') } style={styles.link}>Brian Shaffer</Text> & <Text onPress={ ()=> Linking.openURL('https://github.com/ianhunterharold') } style={styles.link}>Ian Hunter Harold</Text></Text>
              
              <Text onPress= { () => 
                Linking.openURL('https://www.freepik.com/free-photos-vectors/background')} style={{textAlign: 'center'}}>
                Images provided by freepik.com
              </Text>
              <Text onPress= { () => 
                Linking.openURL('https://pixabay.com/users/lethutrang101-6596164/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3121393')} style={{textAlign: 'center'}}>Background graphic by Trang Le 
                <Text onPress= { () => 
                  Linking.openURL('https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=312139')}>From Pixabay
                </Text>
              </Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }} style={styles.aboutButton}>
          <Text style={styles.aboutText}>i</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
	logo: {
		fontSize: 42,
		color: '#47b9c1',
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 40
	},
	link: {
		color: '#47b9c1',
		fontWeight: 'bold'
	},
	authors: {
		marginTop: 20,
    marginBottom: 4
	},
	modalContainer: {
		flex: 1,
		backgroundColor: '#ece5ce',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20
	},
	hideButton: {
		position: 'absolute',
		width: 30,
		height: 30,
		top: 60,
		right: 20,
		zIndex: 9,
		backgroundColor: '#FFF',
		borderRadius: 30/2,
    borderColor: '#47b9c1',
    borderStyle: 'solid',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
	},
	hideButtonText: {
		fontSize: 15,
		color: '#47b9c1',
		fontWeight: 'bold'
  },
  aboutButton: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 10,
    bottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 30/2,
    borderColor: '#47b9c1',
    borderStyle: 'solid',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutButtonText: {
    fontSize: 15,
    color: '#47b9c1',
    fontWeight: 'bold'
  },
  

});

export default InformationModal;