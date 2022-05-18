const tests = [
  {
    testId: 1,
    testName: 'Highest mountains',
    questions: [
      {
        id: 1,
        question: 'Which is the highest peak in Europe?',
        answers: ['Mount Olympus', 'Mount Elbrus', 'Etna', 'Mont Blanc'],
      },
      {
        id: 2,
        question: 'Which is the second highest peak in Asia?',
        answers: ['Everest', 'Mount Ararat', 'K2', 'Mount Fuji'],
      },
      {
        id: 3,
        question: 'Which is the highest peak in Africa?',
        answers: ['Kilimanjaro', 'Pico de Teide', 'Ruwenzori', 'Mount Kenya'],
      },
    ],
    correctAnswers: ['Mount Elbrus', 'K2', 'Kilimanjaro'],
  },
];

export default tests;
