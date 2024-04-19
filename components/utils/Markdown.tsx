import Markdown from "react-markdown"
import { Card } from "@mantine/core"

const MarkdownCard = () => {
  const markdownContent = '#Just a link: www.nasa.gov.'

  return (
    <>
      <Markdown>{markdownContent}</Markdown>
    </>
  )
}

export default MarkdownCard
