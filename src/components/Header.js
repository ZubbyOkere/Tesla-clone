import React, { useState } from 'react'
import styled from 'styled-components'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { selectCars } from '../features/car/CarSlice'
import { useSelector } from 'react-redux'

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(true)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href=''>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <RightMenuText>
          <a href=''>Shop</a>
          <a href=''>Tesla Account</a>
        </RightMenuText>

        <RxHamburgerMenu
          size={30}
          style={{}}
          onClick={() => setBurgerStatus(!true)}
        />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(!false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href='#'>{car}</a>
            </li>
          ))}
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-In Inventory</a>
        </li>
        <li>
          <a href='#'>CyberTruck </a>
        </li>
        <li>
          <a href='#'>Roadstar Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`
const RightMenuText = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 116;
  list-style: none;
  padding: 20px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform 0.5s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(AiOutlineClose)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
