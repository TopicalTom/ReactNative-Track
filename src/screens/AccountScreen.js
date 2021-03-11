import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text>Account</Text>
            <Button 
                title="Go to Screen" 
                onPress={() => navigation.navigate('/')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;