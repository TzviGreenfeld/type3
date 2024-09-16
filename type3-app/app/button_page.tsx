import { SafeAreaView } from "react-native-safe-area-context";
import CircleButton from "../components/CircleButton";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
        <CircleButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
