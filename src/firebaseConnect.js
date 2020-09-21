import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyANJCeO-UmWhgYXnpY2PpynG4ctS8Uhw7Q",
    authDomain: "casi-d6696.firebaseapp.com",
    databaseURL: "https://casi-d6696.firebaseio.com",
    projectId: "casi-d6696",
    storageBucket: "casi-d6696.appspot.com",
    messagingSenderId: "898945885065",
    appId: "1:898945885065:web:91c55e46e7b864ae01f758"
  };
  // Initialize Firebase
  
export const firebaseConnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref('casi-d6696'+ 'viet')
data.once('value').then(function(snapshot) {
      console.log(snapshot);
    })