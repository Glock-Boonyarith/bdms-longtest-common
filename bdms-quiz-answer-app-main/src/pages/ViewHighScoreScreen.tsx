import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useNavigation} from '@react-navigation/native';

const ViewHighScoreScreen: React.FC = () => {
  const highScore = useSelector((state: RootState) => state.highScore);
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>High Score: {highScore}</Text>
      <TouchableOpacity style={styles.backButton} onPress={handleGoHome}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ViewHighScoreScreen;
