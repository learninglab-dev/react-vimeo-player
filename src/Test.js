import React, { useState, useCallback } from 'react'
import Player from './components/Player'


export default function Test() {
  const [play, setPlay] = useState(false)
  const [pause, setPause] = useState(false)
  const [getTime, setGetTime] = useState(false)
  const [time, setTime] = useState(null)

  const timestampTest = useCallback((secs) => {
    setTime(secs)
    setGetTime(false)
    console.log(time)
  }, [time])


  return (
    <div>
      <Player id={371234010} play={play} pause={pause} getTime={getTime} setTime={timestampTest} />
      <button onClick={() => {
        setPlay(true)
        setPause(false)
        }}>play</button>
      <button onClick={() => {
        setPause(true)
        setPlay(false)
        }}>pause</button>
      <button onClick={() => setGetTime(true)}>get time stamp</button>
    </div>
  )
}
