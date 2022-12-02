import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  name: string;
  handleButton: any;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ name, handleButton }) => {
  return (
    <>
      <TouchableOpacity
        onPress={handleButton}
        style={styles.btnContainer}
        activeOpacity={0.7}>
        <Text style={styles.btnText}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  }
})