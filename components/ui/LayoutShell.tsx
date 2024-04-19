"use client"
import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Header, Sidebar } from "@/components/ui"

interface Props {
  children: React.ReactNode
}

export default function LayoutShell(props: Props) {
  const { children } = props
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar opened={opened} toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
