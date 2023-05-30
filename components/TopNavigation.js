import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomMaterialTopTab = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const navigation =  useNavigation()

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleCompleted = (tab) => {
    setActiveTab(tab);
    navigation.navigate('Completed');
  }

  const handleUpcoming = (tab) => {
    setActiveTab(tab);
    navigation.navigate('Appointments')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Tab 1' ? styles.activeTab : null]}
        onPress={() => handleUpcoming('Tab 1')}
      >
        <Text style={[styles.tabText, activeTab === 'Tab 1' ? styles.activeTabText : null]}>Upcoming</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Tab 2' ? styles.activeTab : null]}
        onPress={() => handleCompleted('Tab 2')}
      >
        <Text style={[styles.tabText, activeTab === 'Tab 2' ? styles.activeTabText : null]}>Completed</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={[styles.tab, activeTab === 'Tab 3' ? styles.activeTab : null]}
        onPress={() => handleTabPress('Tab 3')}
      >
        <Text style={[styles.tabText, activeTab === 'Tab 3' ? styles.activeTabText : null]}>Tab 3</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  activeTab: {
    // borderBottomWidth: 4,
    // borderBottomColor: '#0891b2',
    backgroundColor  : '#0891b2',
    borderRadius : 8
  },
  activeTabText: {
    color: 'white',
  },
});

export default CustomMaterialTopTab;
