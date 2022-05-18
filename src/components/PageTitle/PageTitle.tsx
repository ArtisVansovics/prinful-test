import React, { FC } from 'react';
import styles from './PageTitle.module.scss';

type PageTitleProps = {
  title: string;
}

const PageTitle:FC<PageTitleProps> = ({ title }) => (
  <div className={styles.title}>
    {title}
  </div>
);

export default PageTitle;
