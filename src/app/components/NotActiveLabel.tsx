import React from 'react';
import styles from './NotActiveLabel.module.css';

interface NotActiveLabelProps {
    children: React.ReactNode
}

const NotActiveLabel = ({children}: NotActiveLabelProps) => {
  return (
    <span className={styles.label}>{children}</span>
  )
}

export default NotActiveLabel