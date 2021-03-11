import '../utils/_mockLocation';
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

// Contexts
import { Context as LocationContext } from '../context/LocationContext';

// Components
import Map from '../components/Map';

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [ err, setErr ] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, (location) => {
                    addLocation(location);
                }
            );
        } catch (e) {
            setErr(e);
        }
    }

    useEffect(() => {
        const unsubscribe = startWatching();
        return () => unsubscribe;
    }, [])

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