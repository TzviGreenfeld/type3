import { View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import React from "react";
import { Marker } from "react-native-maps";

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

const SmallMapOverview: React.FC<SmallMapOverviewProps> = ({
  selfPoint,
  otherPoint,
}) => {
  console.log((selfPoint.latitude + otherPoint.latitude) / 2);
  console.log((selfPoint.longitude + otherPoint.longitude) / 2);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.1624,
          longitude: 34.8447,
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

const { width: screenWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",

    width: screenWidth,
    height: screenWidth * 0.6,
    backgroundColor: "red",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default SmallMapOverview;
