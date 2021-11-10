import React from 'react'

// Utils
import classes from './counterBox.module.css'

const counterBox = ({ count, updateCount, loading }) => {
  // Constants
  const maxCount = 1000
  const minCount = 0

  // Functions
  const handleIncrement = async () => {
    const newCount = count + 1
    if (newCount <= maxCount) {
      await updateCount(newCount)
    }
  }

  const handleDecrement = async () => {
    const newCount = count - 1
    if (newCount >= minCount) {
      await updateCount(newCount)
    }
  }

  const handleChange = async (value) => {
    const newCount = parseInt(value, 10)
    if (value <= maxCount && value >= minCount) {
      await updateCount(newCount)
    }
  }

  const loaderUI = (
    <div className={classes.loaderUI}>
      <div className={classes.loader} />
      <div>Saving Counter Value</div>
    </div>
  )

  return (
    <div className={classes.body}>
      {loading ? loaderUI : <div className={classes.space} />}
      <div className={classes.counterBody}>
        <div className={classes.leftContainer}>
          <button className={classes.buttonDecrement} type="button" onClick={handleDecrement}>
            -
          </button>
        </div>
        <div className={classes.centerContainer}>
          {' '}
          <input
            type="number"
            value={Number(count).toString()}
            onChange={(e) => handleChange(+e.target.value)}
            className={classes.countInput}
          />
        </div>
        <div className={classes.rightContainer}>
          <button className={classes.buttonIncrement} type="button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default counterBox
