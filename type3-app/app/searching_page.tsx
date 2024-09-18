import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import RadarAnimation from "../components/RadarAnimation";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { startRequest } from "../scripts/requestService";
import { Request } from "../constants/Request";
import { ActivityIndicator } from "react-native-paper";

const SearchingPage = () => {
  const router = useRouter();
  useEffect(() => {
    const request = new Request(
      "a452d9c6-c690-47c6-9aee-bea38cfb7979",
      "a452d9c6-c690-47c6-9aee-bea38cfb7979",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    );
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwNTQ0NDQ0NDQiLCJqdGkiOiI0Y2VjNzdlMC1hMzg1LTQ2MDAtOGEwYS0yOGE1MDg1MmE2OGMiLCJleHAiOjE3MjY2OTcwMjUsImlzcyI6IllvdXJJc3N1ZXIiLCJhdWQiOiJZb3VyQXVkaWVuY2UifQ.9wMZqANLtD9DY3ZV0M0yvpdYmykl_tLo2fZsS2VNfi8";
    startRequest(token);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* <RadarAnimation size={300} color="gray" speed={3}/> */}
      <ActivityIndicator animating={true} color={"#19437D"} size={150} />
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
  searchingText: {
    marginTop: 20,
    fontSize: 18,
    color: "gray",
  },
});

export default SearchingPage;
