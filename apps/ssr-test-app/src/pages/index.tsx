import React, { useState } from 'react'
import InnerHTML from 'dangerously-set-html-content'

export function Index() {
  const [content, setContent] = useState(`
  <div>This is on the second render</div>
`
)
const updatedHtml = `
  <div>Look at the console now!</div>
  <script>
    console.log('hacked!')
  </script>
`

return (
  <div>
    <p>This HTML should be in the document on the first render</p>
    <InnerHTML style={{color: "white", background: "red"}} html={content} />
    <button onClick={() => setContent(updatedHtml)}>Hit here to see magic!</button>
  </div>
);
}

export default Index
