import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useCounterActions, useCounterState } from '@store/actions';

type RootStackParamList = {
  Home: undefined;
  Users: undefined;
};

type HomepageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function HomePage({ navigation }: HomepageProps) {
  const { increment, decrement } = useCounterActions();
  const { count } = useCounterState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Users')} style={styles.button}>
        <Text style={styles.buttonText}>Get Users</Text>
      </TouchableOpacity>

      <Text>Count: {count}</Text>

      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomePage;
