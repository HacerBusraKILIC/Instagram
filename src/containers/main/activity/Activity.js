import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import { width, height } from '../../../Dimensions'
import ProfilePicture from 'components/ProfilePicture'
import ActivityDescription from './ActivityDescription'

const Activity = (props) => {

  return <View style={styles.container}>
    <ProfilePicture item={props.item} size={width*0.14} />
    <ActivityDescription item={props.item} />
    <TouchableOpacity>
      <Image source={{ uri: props.item.mentionedImage }} style={styles.mentionedImage} />
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: height*0.03,
    justifyContent: 'space-between'
  },
  mentionedImage: {
    width: width*0.13,
    height: height*0.07
  },
});

export default Activity;