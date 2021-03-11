import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Context
import { Context as AuthContext } from '../context/AuthContext';

// Stack
import AuthStack from '../stacks/AuthStack';
import TabStack from '../stacks/TabStack';

// Screen
import SplashScreen from '../screens/SplashScreen';

const Root = createStackNavigator();

const RootStack = () => {
    const { state } = useContext(AuthContext);

    if (state.loading) {
        return <SplashScreen />;
    };

    return (
        <NavigationContainer>
            <Root.Navigator>
                {state.token == null ? (
                    <Root.Screen 
                        name="Auth" 
                        component={AuthStack} 
                        options={() => ({ 
                            headerShown: false,
                            animationTypeForReplace: 'pop'
                        })}
                    />
                ) : (
                    <Root.Screen 
                        name="Tab" 
                        component={TabStack} 
                        options={() => ({ 
                            headerShown: false,
                        })}
                    />
                )}
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;