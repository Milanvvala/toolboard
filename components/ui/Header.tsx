"use client"
import { Group, Burger, rem, Autocomplete, Box } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { Logo } from "@/components/ui"
import { ThemeToggle } from "@/components/utils/ThemeToggle"
import ProfileIcon from "./ProfileIcon"

interface Props {
  opened: boolean | undefined
  toggle: () => void
}

export default function Header(props: Props) {
  const { opened, toggle } = props

  return (
    <>
      <Group
        h="100%"
        px={{ base: "sm", md: "xl" }}
        align="center"
        justify="space-between"
      >
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Box hiddenFrom="md" style={{ width: "120px", height: "40px" }}>
            <Logo />
          </Box>

          <Autocomplete
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={["React", "Angular"]}
            visibleFrom="md"
          />
        </Group>
        <Group gap={"xs"}>
          <ProfileIcon />
          <ThemeToggle />
        </Group>
      </Group>
    </>
  )
}
