# ll-vimeo-player
A simple Vimeo player component built with React hooks

**Better documentation coming soon!**

### Accepted Props
Currently this Vimeo player accepts the following props:
- **id**: number (video id from vimeo)
- **width**: string (defaults to '500px')
- **height**: string (defaults to '')
- **controls**: boolean (whether to display Vimeo controls; defaults to false)
- **autoplay**: boolean (whether to autoplay; defaults to false)
- **muted**: boolean (whether to initialize on mute defaults to false)
- **play**: boolean (set to true to play video; set to false to pause the video; defaults to false)
- **getTime**: boolean (set to true to get timestamp; defaults to false)
- **setTime**: function (your function for handling the timestamp after getting it from Vimeo)

### Example
```js
import React, { useState, useCallback } from 'react'
import Player from 'll-vimeo-player'


export default function Example() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [getTime, setGetTime] = useState(false)
  const [time, setTime] = useState(null)

  const getTimestamp = useCallback((secs) => {
    setTime(secs)
    setGetTime(false)
    console.log(time)
  }, [time])


  return (
    <div>
      <Player id={371234010} play={play} getTime={getTime} setTime={getTimestamp} />
      <button onClick={() => setPlay(true)}>play</button>
      <button onClick={() => setPlay(false)}>pause</button>
      <button onClick={() => setGetTime(true)}>get timestamp</button>
    </div>
  )
}
```
