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

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [ err ] = useLocation(useIsFocused(), addLocation);

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            {err
                ?   <Text>Please enable location services</Text>
                :   null
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;