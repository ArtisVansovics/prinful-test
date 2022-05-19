import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import { RootState } from '../../store';
import { getTest } from '../../data/TestsData';

const ResultsPage = () => {
  const [correctAnswers, setCorrectAnswers] = useState<string[]>();
  const [correctSubmittedAnswers, setCorrectSubmittedAnswers] = useState<string[]>();
  const userName = useSelector((state: RootState) => state.test.userName);
  const submittedAnswers = useSelector((state: RootState) => state.test.answers);
  const testId = useSelector((state: RootState) => state.test.testId);

  useEffect(() => {
    const test = getTest(testId);

    if (test) {
      setCorrectAnswers(test.correctAnswers);
    }

    if (correctAnswers) {
      setCorrectSubmittedAnswers(submittedAnswers.filter((answer) => correctAnswers.includes(answer)));
    }
  }, [correctAnswers]);

  const answerCount = correctAnswers?.length;
  const correctCount = correctSubmittedAnswers?.length;

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <PageTitle title={`Thanks, ${userName}`} />
              <p>
                {`You responded correctly to ${correctCount} out of ${answerCount} questions`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
