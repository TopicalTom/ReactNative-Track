import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

// Contexts
import { Context as LocationContext } from '../context/LocationContext';

// Hook
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { 
        state: { name, recording, locations}, 
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(LocationContext);
    const [ saveTrack ] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Spacer />
                <Input 
                    placeholder="Add Track Name"
                    onChangeText={changeName}
                    value={name}
                    />
            </Spacer>
            <Spacer>
                {recording
                    ?   <Button 
                            title="Stop" 
                            onPress={stopRecording}
                        />
                    :   <Button 
                            title={locations.length 
                                ?   "Resume Recording" 
                                :   "Start Recording"
                            }
                            onPress={startRecording}
                        />
                }
            </Spacer>
            <Spacer>
                {!recording && locations.length
                    ?   <Button 
                            title="Save Track" 
                            onPress={saveTrack}
                        />
                    :   null
                }
            </Spacer>
        </>
    )
};

export default TrackForm;