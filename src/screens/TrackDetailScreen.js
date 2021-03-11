import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrackDetailScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text>Track Detail</Text>
            <Button 
                title="Go to Track Detail" 
                onPress={() => navigation.goBack()}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;