import { getUsers } from "@/api";
import PersonMap from "@/components/PersonMap";
import { User } from "@/types";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Redirect } from "expo-router";
import MapView from "react-native-maps";

export default function Index() {
  const [users, setUsers] = useState<User[]>([]);

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Type 3</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <PersonMap users={users}></PersonMap>
    </View>
  );
}

