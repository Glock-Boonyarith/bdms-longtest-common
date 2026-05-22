import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {QuizComponentProps} from '../../models/QuizComponentProps';

const QuizComponent: React.FC<QuizComponentProps> = ({
  question,
  answers,
  onPress,
}) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={styles.answerButton}
          onPress={() => onPress(answer)}>
          <Text>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 5,
  },
});

export default QuizComponent;
