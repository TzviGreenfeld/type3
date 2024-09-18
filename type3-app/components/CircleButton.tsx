import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FAB, PaperProvider, Button } from "react-native-paper";
import { Link } from "expo-router";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SaveButton = () => {
  return (
    <View style={styles.container}>
      <Link href="/searching_page" asChild>
        <FAB
          style={styles.fab}
          icon="alert"
          uppercase={false}
          color="white"
          customSize={300}
        />
        {/* <Button
          style={styles.alertButton}
          mode="contained"
          // onPress={() => console.log("Pressed")}
          icon={() => (
            <MaterialCommunityIcons
              name="medical-bag"
              size={100} // Custom icon size
              color="white"
            />
          )}
          labelStyle={styles.buttonText}
        >
          Find Insulin Near Me
        </Button> */}
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "top",
    alignItems: "center",
  },
  fab: {
    backgroundColor: "#780A12",
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  alertButton: {
    width: "70%",
    height: "40%",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#780A12",
    borderRadius: 75,
  },
  buttonText: {
    fontSize: 20, // Larger text size
    color: "white",
  },
});

export default SaveButton;
{
}
