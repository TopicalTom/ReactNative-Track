import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrackCreateScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text>Create</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;