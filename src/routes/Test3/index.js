import { useRef } from "react";

const Test3 = () => {
  const focusRef = useRef(null)
  const onFocus = () => {
    if (focusRef.current) {
      focusRef.current.focus()
    }
  }
  return(
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button onClick={onFocus} type="button">Focus Text Field</button>
      </p>
      <input  ref={focusRef} type="text" placeholder="focus me" />
    </div>
  )
}

export default Test3;