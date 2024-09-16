import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { FAB } from 'react-native-paper';
import { Link } from 'expo-router'

const SaveButton = () => {
  return (
    <View style={styles.container}>
    <Link href="/searching_page" asChild>
      <FAB
        style={styles.fab}
        icon="alert"
        uppercase={false}
        color="white"
        customSize={300}
      />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  fab: {
    backgroundColor: 'red',
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SaveButton;
