import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 57px;
  background-color: #141414;
  border-bottom: 2px solid #141414;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding-top: 3px;
    font-size: 40px;
    color: #fba92c;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">AK</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
