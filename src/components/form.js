import React from 'react'
import styles from './form.module.scss'

const Form = ({header, subhead, classes = '', id = ''}) => (
  <div id={id} className={`${styles.form} ${classes.split(' ').map(el => styles[el]).join(' ')}`}>
    <div className='columns'>
    <h2 className="small-bottom">{header}</h2>
    <p className="collapse-top subhead">{subhead}</p>
    <form name="contact" method="post" action="/thank-you" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field" />
      <div className={`${styles['input-container']} ${styles['space-right']}`}>
        <input className={styles.basic} type="text" name="name" placeholder="Name*" required />
      </div>
      <div className={`${styles['input-container']}`}>
        <input className={styles.basic} type="email" name="email" placeholder="Email*" required />
      </div>
      <div className={`${styles['input-container']} ${styles['space-right']}`}>
        <input className={styles.basic} type="tel" name="phone" placeholder="Phone Number*" pattern="^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$" title="888-888-8888" required />
      </div>
      <div className={styles['input-container']}>
        <input className={styles.basic} type="text" name="address" placeholder="Property address*" required />
      </div>
      <div className={`${styles['input-container']} ${styles['space-right']}`}>
        <input className={styles.basic} type="text" name="city" placeholder="City*" required />
      </div>
      <div className={`${styles['input-container']}`}>
        <input className={styles.basic} type="text" name="state" placeholder="State*" required />
      </div>
      <div className={`${styles['input-container']} ${styles['space-right']}`}>
        <input className={styles.basic} type="text" name="zip" placeholder="Zip*" pattern="[0-9]{5}" required />
      </div>
      <div className={`${styles['input-container']}`}>
        <select className={styles.basic} name="timeframe">
          <option selected="selected">How soon would you like to sell?</option>
          <option value="3 months">Within 3 months</option>
          <option value="6 months">6 months</option>
          <option value="Longer">Longer</option>
        </select>
      </div>
      <div className={`${styles['input-container']} ${styles['full']}`}>
        <select className={styles.basic} name="condition">
          <option selected="selected">What best describes the condition of your property?</option>
          <option value="Full renovation">Full renovation</option>
          <option value="Minor TLC">Minor TLC</option>
          <option value="Perfect condition">Perfect condition</option>
        </select>
      </div>
      <div className={`${styles['input-container']} ${styles.center} ${styles['space-top']}`}>
        <input className={styles.submit} type="submit" value="GET AN OFFER" />
      </div>
    </form>
    </div>
  </div>
)

export default Form