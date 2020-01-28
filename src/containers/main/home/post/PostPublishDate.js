import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import colors from 'res/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import prettyTime from '../../../../utils/preetyTime';
import { width, height } from '../../../../Dimensions'

const PostPublishDate = ({ post }) => {

  const prettyTimeTemplates = {
    long: {
      prefix: "",
      suffix: " önce",
      seconds: "saniyeler",
      minute: "1 dakika",
      minutes: "%d dakika",
      hour: "1 saat",
      hours: "%d saat",
      day: "1 gün",
      days: "%d gün",
      month: "1 ay",
      months: "%d ay",
      year: "1 yıl",
      years: "%d yıl"
    }
  };
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
      <Text style={styles.text}>
        {prettyTime(prettyTimeTemplates.long, post.publishedAt)}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.01,
    paddingStart: height * 0.03,
    paddingEnd: height * 0.03,
  },
  text: {
    color: colors.textFaded2,
    fontSize: height * 0.017,
  }
});

export default PostPublishDate;