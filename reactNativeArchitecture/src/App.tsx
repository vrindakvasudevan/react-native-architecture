import 'react-native-gesture-handler';
import 'intl-pluralrules';
import './i18n';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import RootStackScreen from '@routes';
import { SafeAreaView, StyleSheet } from 'react-native';

// Create a react-query client
const queryClient = new QueryClient();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <RootStackScreen />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
