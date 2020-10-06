import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const NewCollection = () => {
  const { width, height } = Dimensions.get("window")
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Text style={styles.text}>
          New{"\n"}Collection
          </Text>
      </View>
      <Image
        source={require('../images/bg_6.png')}
        style={{
          maxHeight: height,
          maxWidth: width,
        }}
      />
      <Image
        source={require('../images/sweatshirt.jpg')}
        style={styles.sweatshirt}
      />

      <View style={styles.offerTextWrapper}>
        <Text style={styles.offerText}>
          Save upto{"\n"}
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30
            }}>
            45%
            </Text>
             off
      </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sweatshirt: {
    position: 'absolute',
    bottom: 120,
    left: 10,
    width: '65%',
    height: '60%',
    resizeMode: 'contain'
  },
  text: {
    position: 'absolute',
    fontSize: 40,
    zIndex: 999,
  },
  offerTextWrapper: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    bottom: 110,
  },
  offerText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'white',
    marginRight: 10
  }
})

export default NewCollection