import { HTMLAttributes, useEffect, useRef } from 'react'

/* eslint-disable-next-line */
type Props = HTMLAttributes<HTMLDivElement> & {
  html: string
}

export function DangerouslySetHtmlContent({
  html,
  dangerouslySetInnerHTML,
  ...rest
}: Props) {
  // We remove 'dangerouslySetInnerHTML' from props passed to the div
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!html || !divRef.current) throw "html prop cant't be null"

    const slotHtml = document.createRange().createContextualFragment(html) // Create a 'tiny' document and parse the html string
    divRef.current.innerHTML = '' // Clear the container
    divRef.current.appendChild(slotHtml) // Append the new content
  }, [html, divRef])

  return <div {...rest} ref={divRef}></div>
}

export default DangerouslySetHtmlContent
