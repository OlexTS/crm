import React from 'react';
import styles from './ActiveLabel.module.css';


interface ActiveLabelProps {
    children: React.ReactNode
}

const ActiveLabel = ({children}: ActiveLabelProps) => {
  return (
    <span className={styles.label}>{children}</span>
  )
}

export default ActiveLabel