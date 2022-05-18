import React from 'react';
import { useParams } from 'react-router-dom';

const TestPage = () => {
  const { testId } = useParams();
  const { id } = useParams();

  return (
    <div>
      <h1>Test Page</h1>
      <h1>{testId}</h1>
      <h1>{id}</h1>
    </div>
  );
};

export default TestPage;
