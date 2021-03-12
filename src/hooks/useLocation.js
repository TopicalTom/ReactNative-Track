
import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    const [ err, setErr ] = useState(null);

    useEffect(() => {
        let subscriber;

        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    }, 
                    callback
                );
            } catch (e) {
                setErr(e);
            }
        }

        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback]);

    return [ err ];
}

/*
import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    const [ err, setErr ] = useState(null);
    const [ subscriber, setSubscriber ] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, 
                callback
            );
            setSubscriber(sub);
        } catch (e) {
            setErr(e);
        }
    }

    useEffect(() => {
        if (shouldTrack) {
            startWatching();
        } else {
            subscriber.remove();
            setSubscriber(null);
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack]);

    return [ err ];
}
*/