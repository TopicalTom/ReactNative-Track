import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Context
import { Context as AuthContext } from '../context/AuthContext';

// Stack
import AuthStack from '../stacks/AuthStack';
import TabStack from '../stacks/TabStack';

const Root = createStackNavigator();

const RootStack = () => {
    const { state } = useContext(AuthContext);

    console.log(state)

    return (
        <NavigationContainer>
            <Root.Navigator>
                {state.token == null ? (
                    <Root.Screen 
                        name="Auth" 
                        component={AuthStack} 
                        options={() => ({ 
                            headerShown: false,
                            animationTypeForReplace: 'push'
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