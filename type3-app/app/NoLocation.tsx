import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';

const NoLocation = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/no-location.webp')}
        style={styles.image}
      />
      <Text style={styles.title}>Location Required</Text>
      <Text style={styles.description}>
        This app requires location access to function properly. Please enable location services to continue.
      </Text>
      <Button
        mode="contained"
        onPress={() => router.replace('/registration')}
        style={styles.button}
      >
        Try Again
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.light.text,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.light.text,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.light.tint,
  },
});

export default NoLocation;
