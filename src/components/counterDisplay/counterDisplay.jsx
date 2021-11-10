import React from 'react'

// Utils
import classes from './counterDisplay.module.css'

const counterDisplay = ({ countValue }) => (
  <div className={classes.body}>
    <h2>Counter Value</h2>
    <h3>{countValue}</h3>
  </div>
)

export default counterDisplay
