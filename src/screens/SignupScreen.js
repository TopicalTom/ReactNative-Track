import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

// Context
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = () => {
    const { state, signup } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
                {state.errorMessage
                    ?   <Text>{state.errorMessage}</Text>
                    :   null
                }
            </Spacer>
            <Input 
                label="Email" 
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input 
                label="Password" 
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            <Spacer>
                <Button 
                    title="Register" 
                    onPress={() => signup({ email, password })}
                />
            </Spacer>
            <Spacer>
                <Button 
                    title="Go to Sign In" 
                    onPress={() => navigation.navigate('Signin')}
                />
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 80
    }
});

export default SignupScreen;