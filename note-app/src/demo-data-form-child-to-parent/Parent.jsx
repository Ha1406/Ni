import { useState } from "react"
import Button1 from "./Button1"
import Button2 from "./Button2"

export default function Parent() {
  const [count, setCount] = useState(0)

  function onSendDataButton2(data) {
    setCount(count + data)
  }
  function onSendDataButton1(data) {
    setCount(count - data)
  }

  return (
    <>
      <h1>{count}</h1>
      <Button1 onSendY={onSendDataButton1} />
      <Button2 onSendX={onSendDataButton2} />
    </>
  )
}