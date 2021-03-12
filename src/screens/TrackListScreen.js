import React, { useContext, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

// Contexts
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = () => {
    const navigation = useNavigation();
    const { state, fetchTracks } = useContext(TrackContext);

    useFocusEffect(
        useCallback(() => {
            const unsubscribe = fetchTracks();
            return () => unsubscribe;
        }, [])
    );

    return (
        <SafeAreaView>
            {state.map(item => (
                <TouchableOpacity 
                    key={item._id} 
                    onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                    <ListItem chevron bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;