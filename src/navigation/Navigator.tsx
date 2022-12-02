import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignUp, HomeScreen, DetailsScreen } from '../pages';
import { View, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function HeaderTitle(props: any) {
  const { route } = props;
  // const { name } = route.params ? route.params : {};
  return (
    <View>
      <Text>Title</Text>
    </View>
  );
}

/* custom header */
function headerSection(props: any) {
  // const { route } = props;
  return {
    headerStyle: styles.headerStyle,
    headerTitleAlign: 'center',
    headerTitle: () => <HeaderTitle {...props} />,
    headerLeft: () => null,
    headerRight: () => null
  };
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={(props: any) => headerSection(props)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: '100%',
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: 17,
    textTransform: 'uppercase',
  },
});
export default AppNavigator;
