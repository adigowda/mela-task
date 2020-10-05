import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Nav = () => (
  <View style={styles.head}>
    <AntDesign name="arrowleft" size={30} color="black" />
    <Text style={styles.headerText}>Sweatshirt Store</Text>
    <FontAwesome5 name="store" size={24} color="black" />
  </View>
)

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 20
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
    color: '#040e35'
  },
})

export default Nav