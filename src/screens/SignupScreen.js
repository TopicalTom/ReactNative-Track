import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

// Context
import { Context as AuthContext } from '../context/AuthContext';

// Components
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const { state, signup } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                buttonText="Register"
                onSubmit={signup}
            />
            <NavLink 
                routeName="Signin"
                linkText="Already have an account? Sign in instead"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 80
    },
});

export default SignupScreen;