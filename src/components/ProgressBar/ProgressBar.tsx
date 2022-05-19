import React, { FC } from 'react';
import styles from './ProgressBar.module.scss';

type ProgressBarProps = {
  percentDone: number;
}

const ProgressBar:FC<ProgressBarProps> = ({ percentDone }) => (
  <div className={styles.progressBar}>
    <div
      className={styles.progress}
      style={{ width: `${percentDone}%` }}
    />
  </div>
);

export default ProgressBar;
