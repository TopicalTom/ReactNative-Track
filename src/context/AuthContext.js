import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

// Reducer
const authReducer = (state, action) => {
    switch (action.type) { 
        case 'add_error':
            return { ...state, loading: false, errorMessage: action.payload };
        case 'clear_error_message':
            return { ...state, loading: false, errorMessage: '' };
        case 'go_to_auth':
            return { ...state, loading: false };
        case 'signin':
            return { errorMessage: '', loading: false, token: action.payload };
        case 'signout':
            return { errorMessage: '', loading: true, token: null };
        default:
            return state;
    }
};

// Actions
const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
        dispatch({ 
            type: 'signin', 
            payload: token
        });
    } else {
        dispatch({ type: 'go_to_auth' });
    }
};
const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};
const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerAPI.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ 
            type: 'signin', 
            payload: response.data.token
        });
    } catch (err) {
        dispatch({ 
            type: 'add_error', 
            payload: 'Something went wrong with sign up'
        });
    };
};
const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerAPI.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ 
            type: 'signin', 
            payload: response.data.token
        });
    } catch (err) {
        dispatch({ 
            type: 'add_error', 
            payload: 'Something went wrong with sign in'
        });
    };
};
const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ 
        type: 'signout', 
        payload: 'Something went wrong with sign in'
    });
}

export const { Context, Provider } = createDataContext(
    authReducer, 
    { signin, signup, signout, clearErrorMessage, tryLocalSignin },
    { token: null, loading: true, errorMessage: '' }
);