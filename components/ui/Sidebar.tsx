"use client"
import { useState } from "react"
import {
  Group,
  Box,
  Burger,
  Divider,
  Text
} from "@mantine/core"
import { Logo } from "@/components/ui"
import classes from "./css/sidebar.module.css"
import { categories } from "@/utils/categories"

const data = categories

interface Props {
  opened: boolean | undefined
  toggle: () => void
}

export default function Sidebar(props: Props) {
  const { opened, toggle } = props
  const [active, setActive] = useState("Billing")

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <nav>
      <div>
        <Group className={classes.header} justify="space-between">
          <div>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text fw={"bold"} hiddenFrom="md">
              Categories
            </Text>
            <Box visibleFrom="md">
              <Logo />
            </Box>
          </div>
          {/* <Code fw={700}>v3.1.2</Code> */}
        </Group>
        <Divider my="sm" />
        {links}
      </div>
    </nav>
  )
}
