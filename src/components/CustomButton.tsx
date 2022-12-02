import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  name: string;
  handleButton: any;
  bgColor: string;
  btnTextColor: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({ name, handleButton, bgColor, btnTextColor }) => {
  return (
    <>
      <TouchableOpacity
        onPress={handleButton}
        style={[styles.btnContainer, { backgroundColor: bgColor }]}
        activeOpacity={0.7}>
        <Text style={[styles.btnText, { color: btnTextColor }]}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center'
  }
});