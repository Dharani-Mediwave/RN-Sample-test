import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { customColors } from '../styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { CustomButton } from '../components';

interface SignInFormProps {
  navigation?: any
}

export const SignInForm: React.FC<SignInFormProps> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: any) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePassword = (event: any) => {
    const { value } = event.target;
    setPassword(value);
  };

  const signInBtn = () => {
    navigation?.navigate('home');
  };

  const signInGoogle = () => {
    console.log('signInGoogle successfully');
  };

  return (
    <View style={styles.formSection}>
      {/* Email input field */}
      <View style={styles.inputSection}>
        <View style={styles.iconSection}>
          <Icon name='envelope' size={22} color={customColors.primary} />
        </View>
        <TextInput
          onChangeText={handleEmail}
          value={email}
          placeholder='Enter your email'
          style={styles.textInputSection}
        />
      </View>
      {/* Password input field */}
      <View style={styles.inputSection}>
        <View style={styles.iconSection}>
          <Icon name='lock' size={22} color={customColors.primary} />
        </View>
        <TextInput
          onChangeText={handlePassword}
          value={password}
          placeholder='Enter your password'
          style={styles.textInputSection}
        />
      </View>
      <CustomButton
        name='Sign In'
        bgColor={customColors.primary}
        btnTextColor={customColors.white}
        handleButton={signInBtn} />
      <View style={{ marginBottom: 20 }} />
      <CustomButton
        name='Sign In Google'
        bgColor={customColors.congoPink}
        btnTextColor={customColors.white}
        handleButton={signInGoogle} />
    </View>
  );
};

const styles = StyleSheet.create({
  formSection: {
    flex: 1 / 2,
    backgroundColor: customColors.secondary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  iconSection: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  inputSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 50,
    borderRadius: 10,
    backgroundColor: customColors.white,
    marginBottom: 20
  },
  textInputSection: {
    flex: 1,
  }
})