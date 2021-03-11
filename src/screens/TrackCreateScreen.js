import '../utils/_mockLocation';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';

// Contexts
import { Context as LocationContext } from '../context/LocationContext';

// Hook
import useLocation from '../hooks/useLocation';

// Components
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
    const { state, addLocation } = useContext(LocationContext);
    const [ err ] = useLocation(useIsFocused() || state.recording, location => {
        addLocation(location);
    });

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            {err
                ?   <Text>Please enable location services</Text>
                :   null
            }
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;