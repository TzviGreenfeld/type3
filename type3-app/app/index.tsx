import { getUsers } from "@/api";
import { User } from "@/types";
import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { Text } from "react-native-paper";

export default function Index() {
  const [users, setUsers] = useState<User[]>([]);

  // console.log(expoPushToken);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };

    fetchUsers();
  }, []);


  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>Type 3</Text>
    //   <Text>Edit app/index.tsx to edit this screen.</Text>
    //   <PersonMap users={users}></PersonMap>
    // </View>
    <>
      <Redirect href="/registration" />
    </>
  );
}

