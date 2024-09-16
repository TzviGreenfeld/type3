import { SafeAreaView} from "react-native-safe-area-context";
import { Text } from "react-native";
import RadarAnimation from "../components/RadarAnimation";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const SearchingPage = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/results_page');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <RadarAnimation size={300} color="gray" speed={3}/>
      <Text style={styles.searchingText}>Searching...</Text>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchingText: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default SearchingPage;