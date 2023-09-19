import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import i18next from 'i18next';

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = (newLanguage: string) => {
    i18next.changeLanguage(newLanguage);
  };

  return (
    <View>
      <Text>Select Language:</Text>
      <TouchableOpacity onPress={() => changeLanguage('en')}>
        <Text>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLanguage('fr')}>
        <Text>Français</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageSwitcher;
