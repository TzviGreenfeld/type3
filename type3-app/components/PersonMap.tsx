import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { haversineDistance } from '../utils/distance'
import { User } from '@/types';


interface PersonMapProps {
    users: User[]; // The array of users to be displayed as pins
}

// Modify the component to receive users as props
const PersonMap: React.FC<PersonMapProps> = ({ users }) => {

    return (
        <MapView
            style={styles.map}
            showsUserLocation={true}
            showsMyLocationButton={true}
            initialRegion={{
                latitude: 32.1641,
                longitude: 34.8254,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
        >
            {users.map((user, index) => (
                <Marker
                    key={index}
                    coordinate={{ latitude: user.latitude, longitude: user.longitude }}
                    title={`${user.name} [${haversineDistance(users[0], user).toFixed(2)} km]`}
                />
            ))}
        </MapView>
    );
};

export default PersonMap;

const styles = StyleSheet.create({
    map: {
        height: 400,
        width: '100%',
    },
});
