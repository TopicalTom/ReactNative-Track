import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, buttonText, onSubmit }) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            {errorMessage
                ?   <Text 
                        style={styles.errorMessage}>
                        {errorMessage}
                    </Text>
                :   null
            }
            <Spacer />
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
                    title={buttonText} 
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 16,
        marginTop: 16
    }
});

export default AuthForm;