import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { Text } from "react-native-paper";

export default function Index() {
  const [users, setUsers] = useState<User[]>([]);

  return (

    <>
      <Redirect href="/registration" />
    </>
  );
}

