import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBRtIa4kkbCz5iPSDd_Cd_s03hXj4AeN7k",
    authDomain: "fir-9acd2.firebaseapp.com",
    databaseURL: "https://fir-9acd2.firebaseio.com",
    projectId: "fir-9acd2",
    storageBucket: "fir-9acd2.appspot.com",
    messagingSenderId: "327044023842",
    appId: "1:327044023842:web:0297ba5248e9e9dc5d6c7b",
    measurementId: "G-4LVGW5BGFB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  //const db= firebaseApp.firestore()

  const auth = firebase.auth()
  //const provider = new firebase.auth.GoogleAuthProvider()

 // export { auth ,provider }
  export  {auth}