"use client"
import { Button } from "@mantine/core"

export default function Home() {
  const test = () => {
    console.log("testing")
  }
  return (
    <>
      <Button variant="filled" onClick={test}>
        Button
      </Button>
    </>
  )
}
