import firebase from 'firebase';
// import app from 'firebase/app';


  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyCt9aKiCJO0pefQY3h4G38bGuQOE_w91Wk",
    authDomain: "social-network-react-d13e0.firebaseapp.com",
    databaseURL: "https://social-network-react-d13e0.firebaseio.com",
    projectId: "social-network-react-d13e0",
    storageBucket: "social-network-react-d13e0.appspot.com",
    messagingSenderId: "518269863233",
    appId: "1:518269863233:web:3c13b8bb3d3d9826"
  };
  // Initialize Firebase

const fire = firebase.initializeApp(config);

export default fire;