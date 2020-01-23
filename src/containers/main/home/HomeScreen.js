import React from 'react'
import { FlatList, View } from 'react-native'
import colors from '../../../res/colors'
import Post from '../../../components/Post'

const HomeScreen = () => {
  const post = {
    username: 'hacerbusrakilic',
    placeName: 'Kocaeli, Türkiye',
    imgUrl: 'https://picsum.photos/200/300',
    likeCount: 103,
    commentCount: 42,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    publishedAt: '2019-11-24T17:28:31.123Z',
  };

  return (
    <FlatList
      style={{ backgroundColor: colors.background }}
      data={[
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
        { key: 'd' },
        { key: 'e' },
      ]}
      renderItem={({ item, index }) => <Post post={post} /> } />
  );

}
export default HomeScreen;