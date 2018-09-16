import React from "react";

const editor = (props) => {
  return (
    <div>
      <textarea 
        id="editor"
        value={props.text}
        onChange={props.onChange} />
    </div>
  )
}

export default editor;