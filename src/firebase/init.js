import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD-DpdwmIsinIYteA_zjXLi8uczivhje0k",
  authDomain: "mohit-chat.firebaseapp.com",
  databaseURL: "https://mohit-chat.firebaseio.com",
  projectId: "mohit-chat",
  storageBucket: "mohit-chat.appspot.com",
  messagingSenderId: "817478764281",
  appId: "1:817478764281:web:f0cfad4b85872ec3848428"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()