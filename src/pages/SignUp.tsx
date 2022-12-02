import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { customColors, customFonts } from '../styles';
import { SignInForm } from '../components';

export const SignUp: React.FC = (props: any) => {

  return (
    <View style={styles.container}>
      {/* Render logo */}
      <View style={styles.logoSection}>
        <Text style={styles.compayName}>Sinau</Text>
        <Text style={styles.subText}>Learn from anything and anywhere</Text>
      </View>
      <SignInForm {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.primary
  },
  logoSection: {
    flex: 1 / 2,
    backgroundColor: customColors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  compayName: {
    fontSize: 52,
    fontFamily: customFonts.regularBold,
    color: customColors.white,
    textTransform: 'uppercase'
  },
  subText: {
    fontSize: 18,
    fontFamily: customFonts.medium,
    color: customColors.white,
  }
});