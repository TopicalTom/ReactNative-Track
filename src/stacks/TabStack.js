import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stack
import TrackStack from './TrackStack';

// Screens
import AccountScreen from '../screens/AccountScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';

const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator initialRouteName="Track">
            <Tab.Screen 
                name="Track" 
                component={TrackStack} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Tab.Screen 
                name="TrackCreate" 
                component={TrackCreateScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Tab.Screen 
                name="Account" 
                component={AccountScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
        </Tab.Navigator>
    );
};

export default TabStack;