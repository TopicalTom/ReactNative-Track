import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

// Reducer
const locationReducer = (state, action) => {
    switch (action.type) { 
        case 'add_location':
            if (state.recording) {
                return { 
                    ...state, 
                    locations: [
                        ...state.locations, 
                        action.payload
                    ],
                    currentLocation: action.payload 
                };
            } else {
                return { 
                    ...state, 
                    currentLocation: action.payload 
                };
            };
        case 'start_recording':
            return { 
                ...state, 
                recording: true 
            };
        case 'stop_recording':
            return { 
                ...state, 
                recording: false 
            };
        case 'add_location':
            return { 
                ...state, 
                locations: [
                    ...state.locations, 
                    action.payload
                ]
            };
        case 'change_name':
            return { 
                ...state, 
                name: action.payload
            };
        default:
            return state;
    }
};

// Actions
const changeName = dispatch => name => {
    dispatch({ 
        type: 'change_name',
        payload: name 
    });
};
const startRecording = dispatch => () => {
    dispatch({ 
        type: 'start_recording' 
    });
};
const stopRecording = dispatch => () => {
    dispatch({ 
        type: 'stop_recording' 
    });
};
const addLocation = dispatch => location => {
    dispatch({ 
        type: 'add_location', 
        payload: location 
    });
};

export const { Context, Provider } = createDataContext(
    locationReducer, 
    { 
        startRecording, 
        stopRecording, 
        addLocation, 
        changeName 
    },
    { 
        name: '', 
        locations: [], 
        recording: false, 
        currentLocation: null 
    }
);