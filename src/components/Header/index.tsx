import { Flex, Icon, IconButton, useBreakpoint, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { Notifications } from './Notifications'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'>
      {!isWideVersion && (
        <IconButton
          aria-label='Open Navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant=''
          onClick={onOpen}
          mr='2'
        >
        </IconButton>
      )}
      <Logo></Logo>
      {isWideVersion && <Search />}
      <Flex align='center' ml='auto'>
        <Notifications></Notifications>
        <Profile showProfileData={isWideVersion} ></Profile>
      </Flex>
    </Flex >

  )
} 