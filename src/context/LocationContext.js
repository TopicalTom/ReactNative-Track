import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

// Reducer
const locationReducer = (state, action) => {
    switch (action.type) { 
        case 'add_current_location':
            return { ...state, currentLocation: action.payload };
        default:
            return state;
    }
};

// Actions
const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => (location) => {
    dispatch({ 
        type: 'add_current_location', 
        payload: location 
    });
};

export const { Context, Provider } = createDataContext(
    locationReducer, 
    { startRecording, stopRecording, addLocation },
    { locations: [], recording: false, currentLocation: null }
);