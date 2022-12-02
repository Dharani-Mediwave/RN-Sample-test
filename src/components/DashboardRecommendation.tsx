import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { customColors, customFonts } from '../styles';

interface DashboardRecommendationProps {
  data: any
}

export const DashboardRecommendation: React.FC<DashboardRecommendationProps> = ({ data }) => {
  return (
    <View style={{ backgroundColor: customColors.secondary }}>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10, marginBottom: 10 }}>
        <View style={{ flex: 0.8 }}>
          <Text style={[styles.userName, { color: '#000' }]}>{data?.title}</Text>
          <Text style={[styles.userName, { fontWeight: 'bold', color: '#000' }]}>{data?.price}</Text>
        </View>
        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: customColors.congoPink, }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontSize: 16,
    fontFamily: customFonts.regular,
    color: customColors.white
  },
});