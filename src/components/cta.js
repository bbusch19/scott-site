import React from 'react'
import styles from './cta.module.scss'
import icon from '../img/icon-phn-white.svg'

const Cta = ({classes = [], text, mobileText, phone, hasIcon = false}) => (
  <div className={`${styles.cta} ${classes}`}>
    <a href="javascript:void(0);" className={styles.text}>
      {text}
    </a>
    <a href={`tel:${phone}`} className={styles.mobile}>
      {hasIcon ? <img src={icon} className={styles.icon} /> : ''}
      {mobileText}
    </a>
  </div>
)

export default Cta