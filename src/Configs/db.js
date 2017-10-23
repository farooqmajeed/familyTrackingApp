import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDal21rUzG7fheYGQKr1xWNcqHdOUdKUx8",
    authDomain: "familytrackerapp-a1bbc.firebaseapp.com",
    databaseURL: "https://familytrackerapp-a1bbc.firebaseio.com",
    projectId: "familytrackerapp-a1bbc",
    storageBucket: "",
    messagingSenderId: "686109414986"
};
firebase.initializeApp(config);

export const database = firebase.database();

export const auth = firebase.auth();

export default firebase;