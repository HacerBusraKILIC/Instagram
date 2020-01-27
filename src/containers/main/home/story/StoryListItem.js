//Profil fotoğrafı, uygulamanın her yerinde paylaşımlı olarak kullanılabileceği için bunu components dizini altında oluşturuyoruz
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from 'res/colors';
import ProfilePicture from 'components/ProfilePicture'
import { width, height } from '../../../../Dimensions'


const StoryListItem = ({item, onStoryPress}) => {
  return <View style={styles.container}>
    <ProfilePicture item={item} onStoryPress={onStoryPress}/>
    <Text style={styles.name}>{item.key}</Text>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: width*0.04,
    alignItems: 'center'
  },
  name: {
    color: colors.text,
    fontWeight: 'normal',
    fontSize: width*0.03,
    marginTop: height*0.01
  },
});

export default StoryListItem;