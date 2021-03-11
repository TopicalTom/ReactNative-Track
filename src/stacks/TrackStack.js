import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';

const Stack = createStackNavigator();

const TrackStack = () => {
    return (
        <Stack.Navigator initialRouteName="TrackList">
            <Stack.Screen 
                name="TrackList" 
                component={TrackListScreen} 
                options={() => ({ 
                    title: 'List'
                })}
            />
            <Stack.Screen 
                name="TrackDetail" 
                component={TrackDetailScreen} 
                options={() => ({ 
                    title: 'Details'
                })}
            />
        </Stack.Navigator>
    );
};

export default TrackStack;