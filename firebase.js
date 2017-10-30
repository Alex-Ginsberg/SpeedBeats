import { firebasePw } from './secrets'
import * as firebase from 'firebase';

var config = {
    apiKey: firebasePw,
    authDomain: "speedbeats-dcc89.firebaseapp.com",
    databaseURL: "https://speedbeats-dcc89.firebaseio.com",
    projectId: "speedbeats-dcc89",
    storageBucket: "",
    messagingSenderId: "53494236560"
  };
firebase.initializeApp(config);

export default firebase
