import 'react-native-gesture-handler';
import * as React from 'react';

// Contexts
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as AuthProvider } from './src/context/AuthContext';

// Stack
import RootStack from './src/stacks/RootStack';

const App = () => {
    return (
        <SafeAreaProvider>
            <TrackProvider>
                <LocationProvider>
                    <AuthProvider>
                        <RootStack />
                    </AuthProvider>
                </LocationProvider>
            </TrackProvider>
        </SafeAreaProvider>
    );
};

export default App;
