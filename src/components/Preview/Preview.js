import React from "react";
import marked from "marked";

const preview = (props) => {
  return (
    <div>
      <div 
        id="preview"
        dangerouslySetInnerHTML={{__html: marked(props.text)}} >
      </div>
    </div>
  )
}

export default preview;