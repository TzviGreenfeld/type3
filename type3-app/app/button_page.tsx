import { SafeAreaView } from "react-native-safe-area-context";
import CircleButton from "../components/CircleButton";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.sosText}>SOS{'\n'}Insulin!</Text>
        <CircleButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#385399',
  },
  sosText: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
});
