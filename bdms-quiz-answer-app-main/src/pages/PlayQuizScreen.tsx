import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {questions} from '../constants/quiz';
import {Question} from '../models/question';
import {shuffleArray} from '../utils';
import QuizComponent from '../components/playQuizScreen/QuizComponent';
import ResultComponent from '../components/playQuizScreen/ResultComponent';
import {setHighScore} from '../redux/actions';
import {useDispatch} from 'react-redux';

const PlayQuizScreen: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      currentQuestionIndex === 0 ||
      currentQuestionIndex === questions.length
    ) {
      setShuffledQuestions(shuffleArray([...questions]));
    }
  }, [currentQuestionIndex]);

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderItem = ({item}: {item: Question}) => (
    <QuizComponent
      question={item.question}
      answers={item.answers}
      onPress={handleAnswer}
    />
  );

  const handleGoBack = () => {
    dispatch(setHighScore(score));
    navigation.goBack();
  };

  if (currentQuestionIndex === questions.length) {
    return (
      <ResultComponent
        score={score}
        totalQuestions={questions.length}
        onGoBack={handleGoBack}
      />
    );
  }

  return (
    <View style={styles.quizContainer}>
      {shuffledQuestions[currentQuestionIndex] ? (
        <FlatList
          data={[shuffledQuestions[currentQuestionIndex]]}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default PlayQuizScreen;
