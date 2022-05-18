export type Test = {
  testId: number;
  testName: string;
  questions: Question[];
  correctAnswers: string[];
}

type Question = {
  id: number;
  question: string;
  answers: string[];
}
