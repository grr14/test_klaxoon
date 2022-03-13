import { useEffect, useState } from "react"
import { secondsToHMin } from "../common/utils"

const Timer = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  return <>{secondsToHMin(seconds)}</>
}
export default Timer
