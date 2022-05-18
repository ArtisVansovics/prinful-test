import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Question } from '../../models/TestModel';
import { getQuestion } from '../../data/TestsData';
import Button from '../../components/Button/Button';
import PageTitle from '../../components/PageTitle/PageTitle';

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
      {currentQuestion && (
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <PageTitle title={currentQuestion.questionName} />
              </div>
            </div>
            <div className="col-xs-12">
              <div className="box">
                {currentQuestion.answers.map((answer) => (
                  <Button title={answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;
