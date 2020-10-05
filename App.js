import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import Nav from './components/navbar';
import NewCollection from './components/newCollection';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <ScrollView>
        <NewCollection />
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  }
});
