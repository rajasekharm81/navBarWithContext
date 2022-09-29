import styled from 'styled-components/macro'

export const NavbarContainer = styled.nav`
  display: flex;
  border-bottom: 1px solid #1e293b;
  justify-content: space-between;
  background-color: ${props =>
    props.theme.isDarkTheme ? '#333333' : '#ffffff'};
  height: 10vh;
`

export const MenuContainer = styled.div`
  display: flex;
`
export const HeadingElement = styled.h1`
  color: ${props => (props.theme.isDarkTheme ? '#ffffff' : '#333333')};
  margin-left: 10px;
`
