import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import CounterBox from '../../components/counterBox/counterBox'
import CounterDisplay from '../../components/counterDisplay/counterDisplay'

// Utils
import classes from './counter.module.css'
import { COUNTER_GET_API, COUNTER_UPDATE_API } from '../../utils/constants'

const counter = () => {
  // Constants
  let initialCount = 1

  // States
  const [count, setCount] = useState(initialCount)
  const [loading, setLoading] = useState(false)

  // Functions
  const initialize = async () => {
    const res = await axios.get(COUNTER_GET_API).data
    if (res) {
      initialCount = Number(res)
    }
    setCount(initialCount)
  }

  useEffect(() => {
    initialize()
  }, [initialCount])

  const updateCount = async (newCountValue) => {
    setLoading(true)
    setCount(newCountValue)

    await axios.put(COUNTER_UPDATE_API, {
      'Pratiyush Mishra': newCountValue,
    })
    setLoading(false)
  }

  return (
    <div className={classes.body}>
      <div className={classes.title}>
        <p className={classes.titleText}>Counter App</p>
      </div>
      <div>
        <CounterBox count={count} updateCount={updateCount} loading={loading} />
      </div>
      <div>
        <CounterDisplay countValue={count} />
      </div>
      <div className={classes.author}>
        <p className={classes.authorText}>Made by Pratiyush Mishra</p>
      </div>
    </div>
  )
}

export default counter
