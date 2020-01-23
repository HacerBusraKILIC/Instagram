import React from 'react';
import { Button, View } from 'react-native';
import palette from '../../res/palette';

const MainScreen = (props) => {
  _signOutAsync = async () => props.navigation.navigate('Login');
  _otherScreen = async () => props.navigation.navigate('Other');
  
  return (
    <View >
      <Button title="Çıkış Yap" onPress={_signOutAsync} />
      <Button title="Diğer ekran" onPress={_otherScreen} />
    </View>
  );
}
export default MainScreen;