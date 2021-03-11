import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text>Sign Up</Text>
            <Button 
                title="Go to Sign In" 
                onPress={() => navigation.navigate('Signin')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;