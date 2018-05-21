import React from 'react'
import styles from './column.module.scss'

const Column = ({children, classes = ''}) => (
  <div className={`${styles.column} ${classes.split(' ').map(el => styles[el]).join(' ')}`}>
    <div className='columns'>
      {children}
    </div>
  </div>
)

export default Column