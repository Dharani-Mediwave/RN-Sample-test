import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

interface HomeScreenProps {
    navigation?: any
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textUi}>In 0.69 version of React Native link command has been removed. react-native-asset  should be used to automatically link the font assets</Text>
            <Text style={styles.textUi1}>In 0.69 version of React Native link command has been removed. react-native-asset  should be used to automatically link the font assets</Text>
            <Text style={styles.textUi2}>In 0.69 version of React Native link command has been removed. react-native-asset  should be used to automatically link the font assets</Text>
            <Text style={styles.textUi3}>In 0.69 version of React Native link command has been removed. react-native-asset  should be used to automatically link the font assets</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF"
    },
    textUi: {
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        marginBottom: 10,
        color: "#FF0000",
    },
    textUi1: {
        fontSize: 16,
        fontFamily: "Montserrat-Medium",
        marginBottom: 10,
        color: "#000"
    },
    textUi2: {
        fontSize: 16,
        fontFamily: "Montserrat-Italic",
        marginBottom: 10,
        color: "#000"
    },
    textUi3: {
        fontSize: 16,
        fontFamily: "Montserrat-Bold",
        marginBottom: 10,
        color: "#000"
    }
})