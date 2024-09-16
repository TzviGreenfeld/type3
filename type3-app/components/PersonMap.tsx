import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { haversineDistance } from '../utils/distance'

const PersonMap = () => {
    const pins = [
        { latitude: 32.1641, longitude: 34.8254, name: 'Pin 1' }, // Herzliya
        { latitude: 32.1717, longitude: 34.8250, name: 'Pin 2' }, // Nearby location
        { latitude: 32.1560, longitude: 34.8321, name: 'Pin 3' }, // Nearby location
    ];

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
            {pins.map((pin, index) => (
                <Marker
                    key={index}
                    coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
                    title={`${pin.name} [${haversineDistance(pins[0], pin).toFixed(2)} km]`}
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
