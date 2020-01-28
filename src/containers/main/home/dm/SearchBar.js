import React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import colors from 'res/colors'
import images from 'res/images'
import { width, height } from '../../../../Dimensions'

const SearchBar = () => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
      <Image source={images.search} style={styles.image} />
      <Text style={styles.text}>Ara</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.textFaded3,
    padding: width*0.02,
    borderRadius:  width*0.01,
  },
  image: {
    width: width*0.038,
    height: width*0.038,
  },
  text: {
    color: colors.textFaded2,
    marginStart: width*0.03,
  }
});

export default SearchBar;