import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import colors from '../res/colors';
import { width, height } from '../Dimensions'

const PostComments = ({ post }) => {

  return (
  <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
    <Text style={styles.text}>
      {post.commentCount} yorumun tümünü gör
    </Text>
  </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: height*0.02,
    paddingStart: height*0.03,
    paddingEnd: height*0.03,
  },
  text: {
    color: colors.textFaded2,
  }
});

export default PostComments;