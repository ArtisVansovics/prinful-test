export type Test = {
  testId: number;
  testName: string;
  questions: Question[];
  correctAnswers: string[];
}

export type Question = {
  questionId: number;
  questionName: string;
  answers: string[];
}
