import firebase from "@react-native-firebase/app"

const firebaseConfig = {
  apiKey: 'AIzaSyAs9Sax04m7HvqYVHVhb-1DzzMqIe2Y5OU',
  authDomain: 'greenpid.firebaseapp.com',
  projectId: 'greenpid',
  storageBucket: 'greenpid.appspot.com',
  messagingSenderId: '451032689251',
  appId: '1:451032689251:web:39f84b75f4f6fff73be656',
  measurementId: 'G-7H7CRT4VXC',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
