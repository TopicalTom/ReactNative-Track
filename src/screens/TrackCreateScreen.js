import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrackCreateScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Create</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;