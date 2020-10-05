import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Heading = ({ title }) => (
  <React.Fragment>
    <Text style={styles.headerText}> {title} </Text>
    <Text style={styles.bottomText}> Shop our most-loved brands!</Text>
  </React.Fragment>
)

export default Heading

const styles = StyleSheet.create({
  headerText: {
    textTransform: 'uppercase',
    marginLeft: 20,
    color: '#040e35',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5
  },
  bottomText: {
    marginLeft: 20,
    color: 'grey',
    fontSize: 20,
    marginBottom: 10
  },
})