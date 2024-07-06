import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    width: '100%'
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: 'red',
    borderWidth: 2,
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    backgroundColor: 'black',
    paddingBottom: 20,
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
  }
});