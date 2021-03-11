import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

// Context
import { Context as AuthContext } from '../context/AuthContext';

// Components
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    const { state, signin } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                buttonText="Continue"
                onSubmit={signin}
            />
            <NavLink 
                routeName="Signup"
                linkText="Don't have an account? Sign up instead"
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

export default SigninScreen;