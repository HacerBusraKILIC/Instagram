import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../res/colors'
import { width, height } from '../Dimensions'

const PostLikes = ({ post }) => {

    return (
      <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
        <Text style={styles.text}>{post.likeCount} beğenme
        </Text>
      </TouchableOpacity>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      marginTop: width*0.02,
      paddingStart: width*0.04, 
      paddingEnd: width*0.04, 
    },
    text: {
      color: colors.text,
      fontWeight: 'bold'
    },
  });
  
  export default PostLikes;