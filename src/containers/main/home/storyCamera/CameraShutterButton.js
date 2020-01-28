import React from 'react'
import { View, StyleSheet, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { width, height } from '../../../../Dimensions'

const CameraShutterButton = (props) => {

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          {console.log(height*0.089 +", "+width*0.147)}
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height*0.074
  },
  outerCircle: {
    width: width*0.184, 
    height: height*0.11,
    borderRadius: height*0.11,
    borderWidth: 5,
    backgroundColor: 'transparent',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: width*0.147,
    height: height*0.089,
    borderRadius: height*0.089,
    backgroundColor: 'white',
  },

});

export default CameraShutterButton;