import 'react-native-gesture-handler';
import * as React from 'react';

// Contexts
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as AuthProvider } from './src/context/AuthContext';

// Stack
import RootStack from './src/stacks/RootStack';

const App = () => {
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <RootStack />
            </AuthProvider>
        </SafeAreaProvider>
    );
};

export default App;
