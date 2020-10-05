import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import brandsToCrush from '../data';

const Brands = () => (
  <React.Fragment>
    <Text style={styles.headerText}>
      Brands to crush on
    </Text>
    <Text style={styles.bottomText}>
      Shop our most-loved brands!
    </Text>
    <FlatList
      numColumns={3}
      data={brandsToCrush}
      keyExtractor={item => item.id}
      contentContainerStyle={{ alignItems: 'center' }}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={
        ({ item }) => {
          const { name, imgSrc } = item
          return (
            <View style={styles.itemWrapper}>
              <TouchableOpacity style={{
                backgroundColor: '#fff',
                alignItems: 'center',
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                elevation: 5,
              }}>
                <Image
                  source={imgSrc}
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.brandName}> {name} </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.firstCopy}>First Copy</Text>
              </View>
            </View>
          )
        }
      }
    />
  </React.Fragment>
)

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
  itemWrapper: {
    marginBottom: 30,
    width: '30%'
  },
  image: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    paddingVertical: 60
  },
  brandName: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#040e35',
    padding: 0,
    marginTop: 10
  },
  firstCopy: {
    textAlign: 'center',
    fontSize: 12,
    backgroundColor: '#7ae0be',
    borderRadius: 10,
    padding: 6,
    marginTop: 10,
    width: '70%',
    margin: 'auto',
    color: '#fff'
  }
})

export default Brands