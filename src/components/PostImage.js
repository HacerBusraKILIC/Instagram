import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, } from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import { width, height } from '../Dimensions'

const PostImage = ({ post }) => {

  return (
    <Image source={{ uri: post.imgUrl }} style={styles.postImg} />
  );
};

const styles = StyleSheet.create({
  postImg: {
    height: height*0.5, 
  },
});

export default PostImage;