import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ResultComponentProps} from '../../models/resultComponentProps';

const ResultComponent: React.FC<ResultComponentProps> = ({
  score,
  totalQuestions,
  onGoBack,
}) => (
  <View style={styles.quizContainer}>
    <Text style={styles.resultText}>
      Your Score: {score} / {totalQuestions}
    </Text>
    <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
      <Text style={styles.backButtonText}>Back to Home</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default ResultComponent;
