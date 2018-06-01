import React from 'react'
import styles from './basic-content.module.scss'

const BasicContent = ({children, classes = '', id}) => (
  <div id={id} className={`${styles['basic-content']} ${classes.split(' ').map(el => styles[el]).join(' ')}`}>
    <div className="container">
      <div className="columns">
        {children}
      </div>
    </div>
  </div>
)

export default BasicContent