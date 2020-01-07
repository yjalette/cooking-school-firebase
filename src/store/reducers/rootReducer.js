import authReducer from './authReducer';
import projectReducer from './projectReducer';
import contactReducer from './contactReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    message: contactReducer,
    post: postReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;