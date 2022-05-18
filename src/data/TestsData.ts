import { Question, Test } from '../models/TestModel';

const tests: Test[] = [
  {
    testId: 1,
    testName: 'Highest mountains',
    questions: [
      {
        questionId: 1,
        questionName: 'Which is the highest peak in Europe?',
        answers: ['Mount Olympus', 'Mount Elbrus', 'Etna', 'Mont Blanc'],
      },
      {
        questionId: 2,
        questionName: 'Which is the second highest peak in Asia?',
        answers: ['Everest', 'Mount Ararat', 'K2', 'Mount Fuji'],
      },
      {
        questionId: 3,
        questionName: 'Which is the highest peak in Africa?',
        answers: ['Kilimanjaro', 'Pico de Teide', 'Ruwenzori', 'Mount Kenya'],
      },
    ],
    correctAnswers: ['Mount Elbrus', 'K2', 'Kilimanjaro'],
  },
];

export const getTests = () => [...tests];
export const getTest = (testId: number) => (
  tests.find((test) => (
    test.testId === testId
  ))
);
export const getQuestion = (testId: number, questionId: number) => {
  const currentTest = getTest(testId);
  let currentQuestion: Question | undefined;

  if (currentTest) {
    currentQuestion = currentTest.questions.find((question) => (
      question.questionId === questionId
    ));
  }

  return currentQuestion;
};

export default tests;
