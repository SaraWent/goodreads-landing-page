import firebase from 'firebase'

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyC8G7ZvuVltnTAjulN9o-aHEeBb8BXQ5dk",
    authDomain: "landing-page-proto-001.firebaseapp.com",
    databaseURL: "https://landing-page-proto-001.firebaseio.com",
    projectId: "landing-page-proto-001",
    storageBucket: "landing-page-proto-001.appspot.com",
    messagingSenderId: "315828741919",
    appId: "1:315828741919:web:5edca17aae5a784704b22a"
};

firebase.initializeApp(config);

export default firebase;
