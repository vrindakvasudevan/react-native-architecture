import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useCounterActions, useCounterState } from '@store/actions';
import LanguageSwitcher from '@screens/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <LanguageSwitcher />
      <Text style={styles.title}>{t('WELCOME')}</Text>

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
