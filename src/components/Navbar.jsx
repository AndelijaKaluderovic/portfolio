import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color: #141414;
  border-bottom: 2px solid #141414;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding-top: 8px;
    font-size: 35px;
    color: #FBA92C;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">AK</div>
      <Burger />
    </Nav>
  )
}

export default Navbar