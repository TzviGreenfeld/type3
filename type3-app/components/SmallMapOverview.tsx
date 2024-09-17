import { View, StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import React from 'react';
import { Marker } from 'react-native-maps';

interface SmallMapOverviewProps {
  selfPoint: {
    latitude: number;
    longitude: number;
  };
  otherPoint: {
    latitude: number;
    longitude: number;
  };
}

const SmallMapOverview: React.FC<SmallMapOverviewProps> = ({ selfPoint, otherPoint }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (selfPoint.latitude + otherPoint.latitude) / 2,
          longitude: (selfPoint.longitude + otherPoint.longitude) / 2,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5,
        }}
      >
        <Marker
          coordinate={selfPoint}
          pinColor="red"
          title="Asker"
          description="Asker's location"
        />
        <Marker
          coordinate={otherPoint}
          pinColor="blue"
          title="Donor"
          description="Donor's location"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default SmallMapOverview;

