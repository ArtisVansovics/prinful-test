import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import Page404 from './Pages/404/Page404';
import HomePage from './Pages/Home/HomePage';
import TestPage from './Pages/Test/TestPage';
import ResultsPage from './Pages/ResultsPage/ResultsPage';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/home"
        element={<HomePage />}
      />
      <Route
        path="/test=:testId/q=:id"
        element={<TestPage />}
      />
      <Route
        path="/results"
        element={<ResultsPage />}
      />
      <Route
        path="404"
        element={<Page404 />}
      />
      <Route
        path="*"
        element={<Navigate to="/404" />}
      />
    </Routes>
  </Router>
);

export default App;
