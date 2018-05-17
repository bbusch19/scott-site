import React from 'react'
import styles from './cta.module.scss'

const Cta = ({classes = [], text, mobileText, phone}) => (
  <div className={`${styles.cta} ${classes}`}>
    <a href={`tel:${phone}`} className={styles.text}>
      {text}
    </a>
    <a href="javascript:void(0);" className={styles.mobile}>
      {mobileText}
    </a>
  </div>
)

export default Cta