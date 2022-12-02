import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, } from 'react-native';
import { customColors, customFonts } from '../styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
const { width, height } = Dimensions.get('window');
import { recommendation } from '../data';
import { DashboardRecommendation } from '../components';

interface HomeScreenProps {
  navigation?: any
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingVertical: 20, marginBottom: 100 }}>
        {/* Header section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ width: 70, height: 70 }} />
          <View style={styles.userInfo}>
            <Text style={[styles.userName, { fontWeight: 'bold' }]}>Welcome back</Text>
            <Text style={styles.userName}>Poetri Lazuardi</Text>
          </View>
          <View style={styles.iconSection}>
            <Icon name='bell' size={28} color={customColors.white} />
          </View>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: customColors.secondary, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          {/* Card design */}
          <View style={[styles.cardSection, { marginTop: -100 }]}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 0.8 }}>
                <Text style={[styles.userName, { color: '#000' }]}>Declarative interfaces for any Apple Devices</Text>
                <Text style={[styles.userName, { fontWeight: 'bold', color: '#000' }]}>IDR 850.000</Text>
              </View>
              <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: customColors.congoPink, }} />
              </View>
            </View>
            {/* Progress design */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <View>
                <Text style={[styles.userName, { color: '#000' }]}>Current Progress</Text>
                <Text style={[styles.userName, { color: '#000', fontWeight: 'bold' }]}>50%</Text>
              </View>
              <View>
                <Text style={[styles.userName, { color: '#000' }]}>Current Progress</Text>
                <Text style={[styles.userName, { color: '#000', fontWeight: 'bold' }]}>50%</Text>
              </View>
            </View>
          </View>
          {/* Dashboard recommendation */}
          {recommendation && Array.isArray(recommendation) && recommendation.length ?
            <>
              <Text style={styles.recomTitle}>Recommendation</Text>
              <FlatList
                data={recommendation}
                renderItem={(recommendationItem: any) => {
                  const { item } = recommendationItem;
                  return <DashboardRecommendation data={item} />;
                }}
                keyExtractor={(item: any) => item.id} />
            </> :
            <View>
              <Text>No recommendation yet</Text>
            </View>}

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.primary,
    // paddingHorizontal: 20,
    // paddingVertical: 20
  },
  userInfo: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontFamily: customFonts.regular,
    color: customColors.white
  },
  iconSection: {
    flex: 1,
    maxWidth: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cardSection: {
    flexDirection: 'column',
    backgroundColor: customColors.white,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10
  },
  recomTitle: {
    fontWeight: 'bold',
    color: customColors.black,
    fontSize: 22,
    marginBottom: 10,
    fontFamily: customFonts.regular,
  }
});