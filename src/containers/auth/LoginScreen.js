import React from 'react';
import { Button, View } from 'react-native';
import palette from '../../res/palette';

const LoginScreen = (props) => {

    _signInAsync = async () => { props.navigation.navigate('Main') };

    return (
    <View>
      <Button title="Giriş yap" onPress={_signInAsync} />
    </View>
  );
}
export default LoginScreen;