import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

// Context 
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';

export default () => {
    const { createTrack } = useContext(TrackContext);
    const navigation = useNavigation();
    const { 
        state: { 
            name, 
            locations 
        },
        reset 
    } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
        navigation.navigate('Tracks');
    };
    
    return [ saveTrack ];
};