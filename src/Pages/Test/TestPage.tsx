import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Question } from '../../models/TestModel';
import { getQuestion } from '../../data/TestsData';
import Button from '../../components/Button/Button';

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const { testId } = useParams();
  const { questionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const question = getQuestion(Number(testId), Number(questionId));

    if (question) {
      setCurrentQuestion(question);
    } else navigate('/home');
  }, [testId, questionId]);

  return (
    <div className="page">
      <h1>{currentQuestion?.questionName}</h1>
      {currentQuestion?.answers.map((answer) => (
        <Button title={answer} />
      ))}
    </div>
  );
};

export default TestPage;
