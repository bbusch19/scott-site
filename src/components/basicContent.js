import React from 'react'
import styles from './basic-content.module.scss'

const BasicContent = ({children, classes = ''}) => (
  <div className={styles['basic-content']}>
    <div className="container">
      <div className="columns">
        {children}
      </div>
    </div>
  </div>
)

export default BasicContent