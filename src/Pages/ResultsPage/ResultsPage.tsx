import React from 'react';
import { useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import { RootState } from '../../store';

const ResultsPage = () => {
  const userName = useSelector((state: RootState) => state.test.userName);

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <PageTitle title={`Thanks, ${userName}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
