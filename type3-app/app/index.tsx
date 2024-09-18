import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";

export default function Index() {
  // AsyncStorage.clear();
  return (
    <>
      <Redirect href="/entryPage" />
    </>
  );
}
