import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePushNotifications } from "@/hooks/usePushNotifications";

const EntryPage = () => {
  const { expoPushToken, notification } = usePushNotifications();

  const router = useRouter();
  console.log("EntryPage");
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("Token:", token);
      if (token) {
        router.replace("/button_page");
      } else {
        router.replace("/registration");
      }
    };
    checkToken();
  }, [router]);

  return null;
};
EntryPage.navigationOptions = {
  headerShown: false,
};

export default EntryPage;
