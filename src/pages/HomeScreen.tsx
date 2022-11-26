import React from 'react'
import { View, Text, Button } from 'react-native';

interface HomeScreenProps {
    navigation?: any
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    console.log("navigation :>>", navigation);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}