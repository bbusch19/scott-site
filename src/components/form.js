import React from 'react'
import styles from './form.module.scss'

const Form = ({header, subhead, classes = ''}) => (
  <div className={`${styles.form} ${classes.split(' ').map(el => styles[el]).join(' ')}`}>
    <div className='columns'>
    <h2 className="small-bottom">{header}</h2>
    <p className="collapse-top subhead">{subhead}</p>
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <div className={`${styles['input-container']} ${styles['space-right']}`}>
        <input className={styles.basic} type="text" name="first-name" placeholder="First Name*" />
      </div>
      <div className={styles['input-container']}>
        <input className={styles.basic} type="text" name="last-name" placeholder="Last Name*" />
      </div>
      <div className={`${styles['input-container']} ${styles['space-right']}`}>
        <input className={styles.basic} type="email" name="email" placeholder="Email*" />
      </div>
      <div className={styles['input-container']}>
        <input className={styles.basic} type="tel" name="phone" placeholder="Phone Number*" />
      </div>
      <div className={`${styles['input-container']} ${styles['space-right']}`}>
        <input className={styles.basic} type="text" name="city" placeholder="City*" />
      </div>
      <div className={styles['input-container']}>
        <input className={styles.basic} type="text" name="state" placeholder="State*" />
      </div>
      <div className={`${styles['input-container']} ${styles['space-right']}`}>
        <input className={styles.basic} type="zip" name="zip" placeholder="Zip*" />
      </div>
      <div className={styles['input-container']}>
        <input className={styles.basic} type="text" name="timeframe" placeholder="How soon would you like to sell*" />
      </div>
      <div className={`${styles['input-container']} ${styles['space-right']}`}>
        <input className={styles.basic} type="text" name="home-value" placeholder="What do you think your home is worth*" />
      </div>
      <div className={styles['input-container']}>
      <input className={styles.basic} type="text" name="address" placeholder="Property address" />
      </div>
      <div className={`${styles['input-container']} ${styles.center} ${styles['space-top']}`}>
        <input type="submit" value="SUBMIT" />
      </div>
    </form>
    </div>
  </div>
)

export default Form