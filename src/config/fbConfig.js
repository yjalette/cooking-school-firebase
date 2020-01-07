import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCJYyc4jk95wpDv-J3-CxS_0QckuA_mrww",
  authDomain: "cooking-school-vourliota-66df5.firebaseapp.com",
  databaseURL: "https://cooking-school-vourliota-66df5.firebaseio.com",
  projectId: "cooking-school-vourliota-66df5",
  storageBucket: "cooking-school-vourliota-66df5.appspot.com",
  messagingSenderId: "928096900753",
  appId: "1:928096900753:web:ebab30239ee4a287"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();

export {
    storage, firebase as default
}