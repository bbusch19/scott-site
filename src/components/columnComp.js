import React from 'react'
import styles from './column-comp.module.scss'

const ColumnComp = ({children, classes = ''}) => (
  <div className={`${styles['column-comp']} ${classes.split(' ').map(el => styles[el]).join(' ')}`}>
    <div className="container">
      {children}
    </div>
  </div>
)

export default ColumnComp