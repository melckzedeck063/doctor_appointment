import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const ThreadScreen = () => {
  // Sample data for the thread
  const threadData = [
    { id: 1, sender: 'User1', message: 'Hello!', timestamp: '10:00 AM' },
    { id: 2, sender: 'User2', message: 'Hi there!', timestamp: '10:05 AM' },
    { id: 3, sender: 'User1', message: 'How are you?', timestamp: '10:10 AM' },
    { id: 4, sender: 'User2', message: 'I am good, thanks!', timestamp: '10:15 AM' },
    // Add more messages to the threadData array as needed
  ];

  // Render individual chat bubbles
  const renderChatBubble = ({ item }) => {
    return (
      <View style={styles.chatBubble}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={threadData}
        renderItem={renderChatBubble}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  chatBubble: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#999999',
  },
});

export default ThreadScreen;
