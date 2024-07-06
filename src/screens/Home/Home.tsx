import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Style';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { StatusBar } from 'expo-status-bar';


export function Home() {
  return (
    <View style={styles.appContainer}>
      <View  style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <BatTextInput/>
      </View>

      <StatusBar style='light'/>
    </View>
  );
}