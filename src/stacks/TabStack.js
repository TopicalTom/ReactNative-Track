import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Stack
import TrackStack from './TrackStack';

// Screens
import AccountScreen from '../screens/AccountScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';

const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Tracks"
            tabBarOptions={{
                activeTintColor: 'black',
              }}>
            <Tab.Screen 
                name="Tracks" 
                component={TrackStack} 
                options={() => ({ 
                    headerShown: false,
                    tabBarLabel: 'Track List',
                    tabBarIcon: () => (
                        <Icon 
                            name="home" 
                            type="feather"
                            color='black' 
                            size={30} 
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="TrackCreate" 
                component={TrackCreateScreen} 
                options={() => ({ 
                    headerShown: false,
                    tabBarLabel: 'Add Track',
                    tabBarIcon: () => (
                        <Icon 
                            name="plus-square" 
                            type="feather"
                            color='black' 
                            size={30} 
                        />
                    ),
                })}
            />
            <Tab.Screen 
                name="Account" 
                component={AccountScreen} 
                options={() => ({ 
                    headerShown: false,
                    tabBarLabel: 'Account',
                    tabBarIcon: () => (
                        <Icon 
                            name="user" 
                            type="feather"
                            color='black' 
                            size={30}
                        />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default TabStack;