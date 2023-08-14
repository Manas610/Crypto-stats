import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} backgroundColor={"blackAlpha.900"}>
        <Button variant={"unstyled"} color={"white"} pr={"4"} className='button'>
            <NavLink to="/">Home</NavLink>
        </Button>
        <Button variant={"unstyled"} color={"white"} pr={"4"} className='button'>
            <NavLink to="/exchanges">Exchanges</NavLink>
        </Button>
        <Button variant={"unstyled"} color={"white"} className='button'>
            <NavLink to="/coins">Coins</NavLink>
        </Button>
    </HStack>
  )
}

export default Header
