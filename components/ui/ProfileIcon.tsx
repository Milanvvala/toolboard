import {
  Avatar,
  Group,
  Menu,
  MenuDivider,
  Text,
  UnstyledButton,
  rem,
  useMantineTheme
} from "@mantine/core"
import {
  IconLogout,
  IconSettings,
  IconStar,
  IconTrash
} from "@tabler/icons-react"
import React, { useState } from "react"
import classes from "./css/profileicon.module.css"
import cx from "clsx"

const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
}

export default function ProfileIcon() {
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const theme = useMantineTheme()
  return (
    <>
      <Menu
        width={260}
        position="bottom-end"
        transitionProps={{ transition: "pop-top-right" }}
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton
            className={cx(classes.user, {
              [classes.userActive]: userMenuOpened
            })}
          >
            <Group gap={7}>
              <Avatar src={user.image} alt={user.name} radius="xl" size={32} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <Text fw="bold" size="md">
              {user.name}
            </Text>
          </Menu.Item>
          <MenuDivider />
          <Menu.Item
            leftSection={
              <IconStar
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            }
          >
            Saved posts
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSettings
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconLogout
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Logout
          </Menu.Item>
          <Menu.Item
            color="red"
            leftSection={
              <IconTrash
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
