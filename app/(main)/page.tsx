"use client"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from "@mantine/core"

export default function Home() {
  const test = () => {
    console.log("testing")
  }
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <Button variant="filled" onClick={test}>
        Button
      </Button>
    </>
  )
}
