import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import {
  TextInput,
  Button,
  Title,
  Provider as PaperProvider,
} from "react-native-paper";
import { User } from "../constants/User";
import { useRouter } from "expo-router";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import * as Location from "expo-location";
import * as Application from "expo-application";
import { loginUser, registerUser } from "@/userService";

export default function RegistrationPage() {
  const router = useRouter();
  const { expoPushToken, notification } = usePushNotifications();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deviceId, setDeviceId] = useState("");

  useEffect(() => {
    fetchDeviceId();
  }, []);

  const fetchDeviceId = async () => {
    let deviceId: string | null = null;

    if (Platform.OS === "android") {
      deviceId = Application.getAndroidId();
    } else if (Platform.OS === "ios") {
      deviceId = await Application.getIosIdForVendorAsync();
    }

    setDeviceId(deviceId || "");
  };

  const checkLocationPermissions = async () => {
    // const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
    // const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
    // return backgroundStatus === 'granted' && foregroundStatus === 'granted';
    return true;
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();

    const hasLocationPermissions = await checkLocationPermissions();

    if (!hasLocationPermissions) {
      router.replace("/NoLocation");
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
      0,
      // parseInt(age),
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
      if (response.status === 200 || response.status === 201) {
        await loginUser(user.getPhoneNumber());
        
        router.replace("/button_page");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <PaperProvider>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Adjust if necessary
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          <Title style={styles.title}>Register</Title>

          <TextInput
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
            mode="outlined"
            style={styles.input}
          />

          {/* 
          <TextInput
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
            mode="outlined"
            style={styles.input}
          /> */}

          {/* <TextInput
            label="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            mode="outlined"
            style={styles.input}
          /> */}

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
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  innerContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
