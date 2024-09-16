import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

const PersonMap = () => {
    return (
        <MapView style={styles.map} />
    );
};

export default PersonMap;

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});