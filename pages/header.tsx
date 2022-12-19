import type { NextPage } from 'next'
import styled from 'styled-components'

const Header = styled.div`
 width:100vw;
 height:70px;
 background-color:black;
 display:flex;
 text-align:center;
 justify-content:center;
`
const Logo = styled.h1`
 color:white;
`
export default () => (
  <Header>
     <Logo>Thi</Logo>
  </Header>
)