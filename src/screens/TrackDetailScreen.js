import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';

// Contexts
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ route }) => {
    const { _id } = route.params;
    const { state } = useContext(TrackContext);

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <SafeAreaView>
            <Text h2>{track.name}</Text>
            <MapView 
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline 
                    coordinates={track.locations.map(loc => loc.coords)}
                />
            </MapView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;