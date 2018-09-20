import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyCbsdPzJZ9_bNpizhIX2NGIk-NChn1siXY",
    authDomain: "my-app-31709.firebaseapp.com",
    databaseURL: "https://my-app-31709.firebaseio.com",
    projectId: "my-app-31709",
    storageBucket: "my-app-31709.appspot.com",
    messagingSenderId: "574440759272"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('/notes')