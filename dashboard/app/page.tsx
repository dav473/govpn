'use client'

import { useEffect, useState } from "react"


export default function Home() {
  const [message, setMessage] = useState()
  useEffect(() => {
      const eventSource = new EventSource('/api/server')
      // 监听 SSE 事件的消息
      eventSource.onmessage = function (event) {
          setMessage(event.data)
      }
  },[])
  return (
    <div>
      {message}
    </div>
  );
}
