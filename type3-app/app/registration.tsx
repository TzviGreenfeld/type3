import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Platform } from 'react-native';
import { TextInput, Button, Title, Provider as PaperProvider } from 'react-native-paper';
import { User } from '../constants/User';
import { useRouter } from 'expo-router';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import * as Location from 'expo-location';
import * as Application from 'expo-application';
import { registerUser } from '@/userService';

export default function RegistrationPage() {
  const router = useRouter();
  const { expoPushToken, notification } = usePushNotifications();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    fetchDeviceId();
  }, []);

  const fetchDeviceId = async () => {
    let deviceId: string | null = null;

    if (Platform.OS === 'android') {
      deviceId = Application.getAndroidId();
    } else if (Platform.OS === 'ios') {
      deviceId = await Application.getIosIdForVendorAsync();
    }

    setDeviceId(deviceId || '');
  };

  const checkLocationPermissions = async () => {
    // const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
    // const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
    // return backgroundStatus === 'granted' && foregroundStatus === 'granted';
    return true;
  };

  const handleSubmit = async () => {
    const hasLocationPermissions = await checkLocationPermissions();

    if (!hasLocationPermissions) {
      router.replace('/NoLocation');
      return;
    }

    let currLocation;
    try {
      currLocation = await Location.getCurrentPositionAsync();
    } catch (error) {
      console.error("Error getting current location:", error);
      currLocation = { coords: { latitude: 0, longitude: 0 } };
    }
    const user = new User(
      firstName,
      lastName,
      parseInt(age),
      phoneNumber,
      currLocation.coords.longitude,
      currLocation.coords.latitude,
      expoPushToken?.data || " ",
      deviceId
    );


    console.log(user);
    try {
      const response = await registerUser(user);
      console.log("response", response.status);
    } catch (error) {
      console.error("Error during registration:", error);
    }

  };

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Title style={styles.title}>Registration</Title>

        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          mode="outlined"
          style={styles.input}
        />

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Submit
        </Button>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});
