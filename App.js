import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Import the Firebase modules from the new SDK
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhTtvQpGJFjlZIzOFQkZdPeJ8mCqjgKKw",
  authDomain: "flight-club-app.firebaseapp.com",
  projectId: "flight-club-app",
  storageBucket: "flight-club-app.appspot.com",
  messagingSenderId: "511025382457",
  appId: "1:511025382457:android:ee69714b25dc37038279e8",
  measurementId: "G-XXXXXXX",  // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // New Firebase initialization
const auth = getAuth(app); // Get authentication
const firestore = getFirestore(app); // Get Firestore

export default function App() {
  // State for player scores
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  // Function to increment score for each player
  const incrementScore = (player) => {
    if (player === 1) setPlayer1Score(player1Score + 1);
    if (player === 2) setPlayer2Score(player2Score + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Player 1 Score: {player1Score}</Text>
      <Button title="Add Point" onPress={() => incrementScore(1)} />
      
      <Text>Player 2 Score: {player2Score}</Text>
      <Button title="Add Point" onPress={() => incrementScore(2)} />
      
      <StatusBar style="auto" />
    </View>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
