import React, { useContext } from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Context
import { Context as AuthContext } from '../context/AuthContext';

// Components
import Spacer from '../components/Spacer';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <Text>Account</Text>
            <Spacer>
                <Button 
                    title="Sign Out" 
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;