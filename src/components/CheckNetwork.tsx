import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

interface CheckNetworkProps {
  isConnected: boolean;
  setConnected: any
}

export const CheckNetwork: React.FC<CheckNetworkProps> = ({
  isConnected,
  setConnected
}) => {

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      const { type, isConnected } = state;
      setConnected(isConnected);
    });

    // Unsubscribe
    return (() => {
      unsubscribe();
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text>Check network connection</Text>
      <Text>{isConnected ? "No Internet connection" : ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
