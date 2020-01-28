import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { width, height } from '../../../Dimensions'
import images from 'res/images'
import SearchScreen from './SearchScreen'
import palette from 'res/palette'
import colors from 'res/colors'

const SearchNavigator = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      ...palette.header,
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <Image style={styles.headerLeftImage} source={images.search_selected} />
          <Text style={styles.headerLeftText}>Ara</Text>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Image style={styles.headerRightImage} source={images.qr_code} />
          </TouchableOpacity>
        </View>
      ),
    })
  }
});

const styles = StyleSheet.create({
  headerLeftContainer: { ...palette.header.headerLeftContainer },
  headerLeftImage: {...palette.header.image},
  headerRightContainer: { ...palette.header.headerRightContainer },
  headerRightImage: {...palette.header.image},
  headerLeftText: { color: colors.textFaded1, marginLeft: width*0.025, fontSize: width*0.04 },
});

export default SearchNavigator;