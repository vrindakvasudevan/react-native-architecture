import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type RootStackParamList = {
  Home: undefined;
  Users: undefined;
};

type HomepageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function HomePage({ navigation }: HomepageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Users')} style={styles.button}>
        <Text style={styles.buttonText}>Get Users</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomePage;
