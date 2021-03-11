import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrackDetailScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text>Track Detail</Text>
            <Button 
                title="Go to Track Detail" 
                onPress={() => navigation.goBack()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;