import { useEffect, useContext } from 'react';

// Context
import { Context as AuthContext } from '../context/AuthContext';

const SplashScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    // Looks for Signed In User if exists
    useEffect(() => {
        const unsubscribe = tryLocalSignin();
        return () => unsubscribe;
    }, []);

    return null;
};

export default SplashScreen;