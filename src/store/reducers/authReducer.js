// import { auth } from "firebase";

const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('failed auth');
            return {
                ...state,
                authError: 'login failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            return {
                ...state
            }

        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }

        case 'UPDATE_EMAIL_SUCCESS':
            return {
                ...state
            }
        case 'UPDATE_EMAIL_SUCCESS':
            return {
                ...state
            }
        default:
            return state
    }
}

export default authReducer;