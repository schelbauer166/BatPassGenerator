import React from 'react';
import { Button, TextInput, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatTextInputStyle';
import BatGenerator from '../../service/BatGenerator'


export function BatTextInput() {
  const [pass, setPass] = React.useState('')

  function handlePassInput(): void {
    setPass(BatGenerator)
  }

  function fetchCopiedText(): void {
    Clipboard.setStringAsync(pass)
  }


  return (
    <>
      <TextInput style={styles.inputer} multiline={true} value={pass} >

      </TextInput>
      <View style={styles.button}>
        <Button
          title={'⚡Generator⚡'}
          onPress={handlePassInput}
          accessibilityLabel="Press it to generate a frase!"
          color={'red'}
        >
        </Button>
      </View>
      <View style={styles.button}>
        <Button
          title={'🦇Copy🦇'}
          onPress={fetchCopiedText}
          accessibilityLabel="Press it to copy a frase!"
          color={'red'}>
        </Button>
      </View>
    </>
  );
}