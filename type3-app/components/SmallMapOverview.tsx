import { View, StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import React from 'react';
import { Marker } from 'react-native-maps';

interface SmallMapOverviewProps {
  askerPoint: {
    latitude: number;
    longitude: number;
  };
  donorPoint: {
    latitude: number;
    longitude: number;
  };
}

const SmallMapOverview: React.FC<SmallMapOverviewProps> = ({ askerPoint, donorPoint }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (askerPoint.latitude + donorPoint.latitude) / 2,
          longitude: (askerPoint.longitude + donorPoint.longitude) / 2,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5,
        }}
      >
        <Marker
          coordinate={askerPoint}
          pinColor="red"
          title="Asker"
          description="Asker's location"
        />
        <Marker
          coordinate={donorPoint}
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

