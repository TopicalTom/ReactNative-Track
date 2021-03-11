import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import Spacer from '../components/Spacer';

const NavLink = ({ routeName, linkText, }) => {
    const navigation = useNavigation();

    return (
        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                <Text 
                    style={styles.link}>
                    {linkText}
                </Text>
            </TouchableOpacity>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default NavLink;