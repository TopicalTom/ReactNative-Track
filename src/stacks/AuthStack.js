import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Signup">
            <Stack.Screen 
                name="Signup" 
                component={SignupScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Signin" 
                component={SigninScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;