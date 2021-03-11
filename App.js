import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Stack
import AuthStack from './src/stacks/AuthStack';
import TabStack from './src/stacks/TabStack';

const RootStack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen 
                        name="Auth" 
                        component={AuthStack} 
                        options={() => ({ 
                            title: 'Auth'
                        })}
                    />
                    <RootStack.Screen 
                        name="Tab" 
                        component={TabStack} 
                        options={() => ({ 
                            title: 'Tab'
                        })}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
