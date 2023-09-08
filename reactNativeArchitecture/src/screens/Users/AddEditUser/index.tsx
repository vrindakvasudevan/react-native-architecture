import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Props } from '../types';
import styles from './style';

const AddEditUser = (props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Submit" onPress={() => props.sendDataToParent()} />
    </View>
  );
};

export default AddEditUser;
