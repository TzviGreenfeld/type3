import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserById } from '@/scripts/usersService';

export default function ResultsPage() {
  const [targetUser, setTargetUser] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const getResultUser = async () => {
    try {
      console.log('get result user');
      const targetUserId = await AsyncStorage.getItem('targetUserId');
      const currentUserId = await AsyncStorage.getItem('userId');
      console.log(targetUserId);
      console.log(currentUserId);
      if (targetUserId !== null && currentUserId !== null) {
        const target = await getUserById(targetUserId);
        const current = await getUserById(currentUserId);
        console.log(target);
        console.log(current);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResultUser();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
