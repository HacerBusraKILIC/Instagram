import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import colors from 'res/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import prettyTime from '../../../../utils/preetyTime';
import { width, height } from '../../../../Dimensions'

const PostPublishDate = ({ post }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
      <Text style={styles.text}>
        {prettyTime(post.publishedAt)}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: height*0.01,
    paddingStart: height*0.03,
    paddingEnd: height*0.03,
  },
  text: {
    color: colors.textFaded2,
    fontSize: height*0.017,
  }
});

export default PostPublishDate;