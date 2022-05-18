import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TestForm.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { getTests } from '../../data/TestsData';
import Button from '../Button/Button';
import { AppDispatch, RootState } from '../../store';
import { setUsername } from '../../store/reducers/testReducer';

const TestForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const userName = useSelector((state: RootState) => state.test.userName);

  const tests = getTests();

  const inputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const selectionUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTest(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setUsername(inputValue));
        setInputValue('');
        navigate(`/test=${selectedTest}/q=1`);
        console.log(userName);
      }}
    >
      <PageTitle title="Technical Task" />
      <input
        className={styles.input}
        type="text"
        placeholder="Enter your name"
        ref={inputRef}
        value={inputValue}
        onChange={inputUpdate}
        required
      />
      <select
        value={selectedTest}
        onChange={selectionUpdate}
        required
      >
        <option
          disabled
          label="Select test"
        />
        {tests.map((test) => (
          <option
            key={test.testId}
            value={test.testId}
          >
            {test.testName}
          </option>
        ))}
      </select>
      <Button title="Start" />
    </form>
  );
};

export default TestForm;
