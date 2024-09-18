import { usePushNotifications } from "@/hooks/usePushNotifications";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { expoPushToken, notification } = usePushNotifications();
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
