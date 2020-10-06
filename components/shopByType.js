import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { forAllGenders, hoodies } from '../data';
import Heading from './heading';

const imageWidth = Dimensions.get('window').width

const ShopByType = () => (
  <View style={{
    flex: 1
  }}>
    <View style={styles.headerView}>
      <View style={styles.heading}>
        <Heading
          title='Shop by type'
        />
      </View>
    </View>
    <View style={{
      bottom: 50,
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <FlatList
        data={hoodies}
        numColumns={2}
        keyExtractor={item => item.id}
        automaticallyAdjustContentInsets={true}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        renderItem={({ item, index }) => (
          <View>
            <View style={[
              styles.wrapper,
              {
                marginTop: index > 1 ? 30 : 0
              }
            ]}>
              <Image
                source={item.imgSrc}
              />
            </View>
            <Text style={styles.brand}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  </View>
)

export default ShopByType

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#e9fef7',
    width: '100%',
    height: 170,
  },
  heading: {
    top: 20
  },
  wrapper: {
    marginHorizontal: 40,
    borderStyle: 'dotted',
    borderRadius: 150,
    borderWidth: 4,
    borderColor: '#7ae0be',
    padding: 2
  },
  brand: {
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 1,
    marginTop: 5
  }
})