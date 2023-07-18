import React from 'react';
import { View, Image } from 'react-native';

const Logo = () => (
  <View style={{ padding: 4, margin: 'auto' }}>
    <Image style={{ height: 40, width: 40, borderRadius: 50 }} source={require('../../assets/images/icon.png')} />
  </View>
);

export default Logo;
