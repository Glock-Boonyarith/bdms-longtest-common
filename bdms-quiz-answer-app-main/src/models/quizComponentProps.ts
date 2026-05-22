export interface QuizComponentProps {
  question: string;
  answers: string[];
  onPress: (selectedAnswer: string) => void;
}
