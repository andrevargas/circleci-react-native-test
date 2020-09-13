import React, {useState, useRef} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  // just clear the inputs for test purposes
  function handleSubmit() {
    setEmail('');
    setPassword('');
  }

  function focusPasswordInput() {
    passwordRef.current.focus();
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={focusPasswordInput}
          placeholder="E-mail"
          returnKeyType="next"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          underlineColorAndroid="darkviolet"
          style={styles.input}
        />
        <TextInput
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
          placeholder="Password"
          returnKeyType="go"
          autoCapitalize="none"
          secureTextEntry={true}
          underlineColorAndroid="darkviolet"
          style={styles.input}
        />
        <Button title="Submit" color="darkviolet" onPress={handleSubmit} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 20,
  },
});
