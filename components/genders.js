import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { forAllGenders } from '../data';
import Heading from './heading';

const imageWidth = Dimensions.get('window').width

const ForAllGenders = () => (
  <React.Fragment>
    <Heading
      title='For all genders'
    />
    <FlatList
      data={forAllGenders}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <Image
            source={item.imgSrc}
            style={styles.image}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.genderText}>
              {item.name}
            </Text>
          </View>
        </View>
      )}
    />
  </React.Fragment>
)

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    width: imageWidth / 2,
    marginHorizontal: 5,
    alignItems: 'center'
  },
  genderText: {
    backgroundColor: '#fff',
    textAlign: 'center',
    paddingVertical: 15,
    borderRadius: 25,
    position: 'relative',
    bottom: 40,
    width: '90%',
    elevation: 4,
    color: '#040e35',
    fontSize: 17
  }
})

export default ForAllGenders