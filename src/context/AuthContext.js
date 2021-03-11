import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

// Reducer
const authReducer = (state, action) => {
    switch (action.type) { 
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

// Actions
const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerAPI.post('/signup', { email, password });

        console.log(response)
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ 
            type: 'signup', 
            payload: response.data.token
        });
    } catch (err) {
        dispatch({ 
            type: 'add_error', 
            payload: 'Something went wrong with sign up'
        });
    };
};
const signin = dispatch => {
    return ({ email, password }) => {
        dispatch({ type: "signin", payload: {
            email,
            password
        }})
    }
}
const signout = dispatch => {
    return () => {
        // 
    }
}

export const { Context, Provider } = createDataContext(
    authReducer, 
    { signin, signup, signout },
    { token: null, errorMessage: '' }
);