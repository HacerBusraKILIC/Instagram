
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, } from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import { width, height } from '../../../../Dimensions'

const PostHeader = ({ post }) => {

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Image source={images.profile} style={styles.personImage} />
        <View>
          <Text style={styles.personName}>{post.username}</Text>
          <Text style={styles.placeName}>{post.placeName}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={images.more} style={styles.iconMore} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: height*0.02,
    paddingBottom: height*0.02,
    paddingStart: width*0.04, //20
    paddingEnd: width*0.04,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  personImage: {
    width: width*0.06,
    height: height*0.04, 
    borderRadius: height*0.02,
  },
  personName: {
    color: colors.text,
    marginStart: height*0.01,
    fontWeight: 'bold'
  },
  placeName: {
    color: colors.text,
    marginStart: height*0.01,
    fontSize: height*0.02
  },
  iconMore: {
    width: width*0.03,
    height: height*0.03
  },
});

export default PostHeader;