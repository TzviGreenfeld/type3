import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Title, Provider as PaperProvider } from 'react-native-paper';
import { User } from '../constants/User';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';

export default function RegistrationPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState({ long: 0, lat: 0 });

  const checkLocationPermissions = async () => {
    let { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
    let { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
    console.log(backgroundStatus, foregroundStatus);
    return backgroundStatus === 'granted' && foregroundStatus === 'granted';
  }

  const handleSubmit = async () => {
    // Handle form submission here
    const user = new User(firstName, lastName, parseInt(age), phoneNumber, 0, 0);

    if (!checkLocationPermissions()) {
        router.push('/NoLocation');
        return;
    }

    Location.getCurrentPositionAsync().then((currLocation: any) => {
        setLocation({ long: currLocation.coords.longitude, lat: currLocation.coords.latitude });
        user.setLocation(currLocation.coords.longitude, currLocation.coords.latitude);
        console.log(user);
    }).catch((error) => {
        console.error('Error getting location:', error);
    });
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

