import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <Text>Sign In</Text>
            <Button 
                title="Go to Sign Up" 
                onPress={() => navigation.navigate('Signup')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default SigninScreen;