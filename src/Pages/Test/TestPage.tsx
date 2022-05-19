import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Question, Test } from '../../models/TestModel';
import { AppDispatch, RootState } from '../../store';
import { getQuestion, getTest } from '../../data/TestsData';
import Button from '../../components/Button/Button';
import PageTitle from '../../components/PageTitle/PageTitle';
import { addAnswer } from '../../store/reducers/testReducer';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentTest, setCurrentTest] = useState<Test>();
  const [currentAnswer, setCurrentAnswer] = useState('');
  const testId = useSelector((state: RootState) => state.test.testId);
  const answers = useSelector((state: RootState) => state.test.answers);
  const { questionId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const test = getTest(testId);
    const question = getQuestion(testId, Number(questionId));

    if (question) {
      setCurrentTest(test);
      setCurrentQuestion(question);
    } else navigate('/home');
  }, [testId, questionId]);

  const percentageAnswered = () => {
    let percentage = 0;

    if (currentTest) {
      percentage = (Number(questionId) / currentTest.questions.length) * 100;
      console.log(currentTest.questions.length);
    }

    return percentage;
  };

  return (
    <div className="page">
      {currentQuestion && (
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-12">
              <div className="box">
                <PageTitle title={currentQuestion.questionName} />
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
              <div className="box">
                <div className="grid">
                  {currentQuestion.answers.map((answer) => (
                    <Button
                      title={answer}
                      onClick={() => setCurrentAnswer(answer)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
              <div className="box">
                <ProgressBar percentDone={percentageAnswered()} />
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-12">
              <div className="box">
                {currentTest && answers.length < currentTest.questions.length - 1
                  ? (
                    <Button
                      title="Next"
                      disabled={currentAnswer === ''}
                      onClick={() => {
                        dispatch(addAnswer(currentAnswer));
                        setCurrentAnswer('');
                        navigate(`/test=${testId}/q=${Number(questionId) + 1}`);
                      }}
                    />
                  )
                  : (
                    <Button
                      title="See your results"
                      disabled={currentAnswer === ''}
                      onClick={() => {
                        dispatch(addAnswer(currentAnswer));
                        setCurrentAnswer('');
                        navigate('/results');
                      }}
                    />
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;
