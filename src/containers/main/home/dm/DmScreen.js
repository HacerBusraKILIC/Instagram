
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, } from 'react-native';
import images from 'res/images';
import colors from 'res/colors';
import palette from 'res/palette';
import { width, height } from '../../../../Dimensions'

const DmScreen = (props) => {

  return (
    <View style={styles.container}></View>
  );
}

DmScreen.navigationOptions = ({ navigation }) => ({
  ...palette.header,
  headerLeft: () => (
    <View style={styles.headerLeftContainer}>
      <TouchableOpacity style={styles.headerLeftBackButton} onPress={() => navigation.goBack(null)}>
        <Image style={styles.headerLeftBackButtonImage} source={images.back} />
        <Text style={styles.headerLeftBackButtonText}>Direct</Text>
      </TouchableOpacity>
    </View>
  ),

  headerRight: () => (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={styles.headerRightCamera} source={images.video_camera} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={styles.headerRightDm} source={images.write} />
      </TouchableOpacity>
    </View>
  ),
});

const styles = StyleSheet.create({
  container: { backgroundColor: colors.background, padding: width*0.03, flex: 1 },
  header: { color: colors.text, fontSize: width*0.03, fontWeight: 'bold', marginTop: height*0.06 },
  headerLeftContainer: { marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' },
  headerLeftBackButton: { flexDirection: 'row' },
  headerLeftBackButtonImage: { height: height*0.04, width: width*0.03 },
  headerLeftBackButtonText: { color: colors.text, marginLeft: width*0.04, fontSize: width*0.05 },
  headerRightContainer: { marginRight: width*0.04, flex: 1, flexDirection: 'row', alignItems: 'flex-start' },
  headerRightCamera: { height: height*0.06, width: width*0.06, resizeMode: 'contain' },
  headerRightDm: { marginLeft: width*0.05, paddingTop: height*0.04, height: height*0.05, width: width*0.05, resizeMode: 'contain' },
});

export default DmScreen;