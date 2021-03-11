import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Context
import { Context as AuthContext } from '../context/AuthContext';

// Screens
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    const { clearErrorMessage } = useContext(AuthContext);
    
    return (
        <Stack.Navigator initialRouteName="Signup">
            <Stack.Screen 
                name="Signup" 
                component={SignupScreen} 
                listeners={{
                    blur: () => clearErrorMessage()
                }}
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Signin" 
                component={SigninScreen} 
                listeners={{
                    beforeRemove: () => clearErrorMessage()
                }}
                options={() => ({ 
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;