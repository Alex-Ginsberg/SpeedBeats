/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import firebase from './firebase'
import { Col, Row, Grid } from "react-native-easy-grid";
import Sound from 'react-native-sound'
Sound.setCategory('Playback');


// let sound = new Sound('snare.mp3', Sound.MAIN_BUNDLE, (error) => {
//   if (error) {
//       console.log('failed to load the sound', error);
//   } else {
//       sound.play(); // have to put the call to play() in the onload callback
//   }
// });

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      beatSet: []
    }
  }

  componentDidMount() {
    const firstBeats = [makeSound('snare.mp3'), 
                        makeSound('bass.mp3'),
                        makeSound('clap.mp3'),
                        makeSound('cowbell.mp3'),
                        makeSound('highhat.mp3'),
                        makeSound('rimshot.mp3')]
    this.setState({beatSet: firstBeats})
  }


  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Row><TouchableOpacity style={styles.butt} onPress={() => this.state.beatSet[0].play()}></TouchableOpacity></Row>
            <Row><TouchableOpacity style={styles.butt} onPress={() => this.state.beatSet[1].play()}></TouchableOpacity></Row>
            <Row><TouchableOpacity style={styles.butt} onPress={() => this.state.beatSet[2].play()}></TouchableOpacity></Row>
          </Col>
          <Col>
            <Row><TouchableOpacity style={styles.butt} onPress={() => this.state.beatSet[3].play()}></TouchableOpacity></Row>
            <Row><TouchableOpacity style={styles.butt} onPress={() => this.state.beatSet[4].play()}></TouchableOpacity></Row>
            <Row><TouchableOpacity style={styles.butt} onPress={() => this.state.beatSet[5].play()}></TouchableOpacity></Row>
          </Col>
        </Grid>
      </View>
    );
  }
}

// Takes in a fileName as a string, corresponding to the mp3 file that should be played
function makeSound(file) {
  let sound = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
    } 
    // else {
    //     sound.play(); // have to put the call to play() in the onload callback
    // }
  });
  return sound
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  butt: {
    backgroundColor: 'red',
    height:50,
    width:50,
 }
});
