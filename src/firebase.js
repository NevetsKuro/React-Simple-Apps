import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAdmtVsQEWqGcsheNNdSwqAW8K_NoCW9j4",
  authDomain: "eatmomo-b131c.firebaseapp.com",
  databaseURL: "https://eatmomo-b131c.firebaseio.com",
  projectId: "eatmomo-b131c",
  storageBucket: "eatmomo-b131c.appspot.com",
  messagingSenderId: "481504026724",
  appId: "1:481504026724:web:74e2797d09e915499ebf71",
  measurementId: "G-8YSP2HNECG"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseGoals = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();