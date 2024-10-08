import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { startRequest, getRequest } from "../scripts/requestService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";

const SearchingPage = () => {
  AsyncStorage.setItem("resultUser", "");

  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(async () => {
      console.log("Checking for request");
      const requestId = await AsyncStorage.getItem("requestId");
      if (requestId) {
        const response = await getRequest(requestId);
        console.log("Request status:", response.data.status);
        if (response.data.status === "Completed") {
          await AsyncStorage.setItem("requestId", "");
          clearInterval(interval);
          router.push({
            pathname: "/LinkingPage",
            params: {
              resultJson: JSON.stringify(response.data),
              showType: "request",
            },
          });
        }
      } else {
        console.log("No request ID found");
        const resposne = startRequest();
      }
    }, 10 * 1000); // Replace x with the number of seconds you want

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <RadarAnimation size={300} color="gray" speed={3}/> */}
      {/* <ActivityIndicator animating={true} color={"#19437D"} size={150} /> */}
      <Image
        source={require("../assets/images/radar.gif")}
        style={styles.radarImage}
      />
      <Text style={styles.searchingText}>Searching...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  radarImage: {
    width: 300,
    height: 300,
  },
  searchingText: {
    marginTop: 20,
    fontSize: 18,
    color: "gray",
  },
});

export default SearchingPage;
