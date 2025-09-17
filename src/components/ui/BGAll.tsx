import React from 'react'
import styles from './BGAll.module.css'

export default function BGAll() {
  return (
    <div className={styles.bgAll}>
      <div className={styles.bgBlue} />
      <div className={styles.overlay} />
      <div className={styles.lights} />
    </div>
  )
}


