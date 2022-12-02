import React from 'react';
import { View, Text, Button } from 'react-native';

interface DetailsScreenProps {
  navigation?: any
}

export const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};