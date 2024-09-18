import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FAB, IconButton } from "react-native-paper";
import { Link } from "expo-router";

//circle button for the bottom of the page
const SaveButton = () => {
  return (
    <View style={styles.container}>
      <Link href="/searching_page" asChild>
        <FAB
          style={styles.fab}
          icon="needle"
          uppercase={false}
          color="white"
          customSize={300}
        />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#780A12",
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    backgroundColor: "#ed1b24",
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
