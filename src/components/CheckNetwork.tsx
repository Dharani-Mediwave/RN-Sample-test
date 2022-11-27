import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
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

  const handleRetry = () => {
    NetInfo.fetch().then(state => {
      const { isConnected } = state;
      setConnected(isConnected);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Check network connection</Text>
      <Text style={styles.noConnection}>{isConnected ? "No Internet connection" : ""}</Text>
      <Button
        title="Try again"
        onPress={handleRetry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noConnection: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    color: "#000"
  }
});
