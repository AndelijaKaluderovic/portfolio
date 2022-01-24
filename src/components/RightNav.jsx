import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  a {
      text-decoration: none;
      color: white;
  }
  a:hover{
    color: #FBA92C;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #141414;
    position: fixed;
    text-align: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 3;
    top: 0;
    right: 0;
    height: 60vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: white;
    }
  }
`;

const RightNav = (props) => {
    const {open, setOpen} = props;
    return (
        <Ul open={open}>
            <li><a href="#home" onClick={()=> setOpen(!open)}>Home</a></li>
            <li><a href="#about" onClick={()=> setOpen(!open)}>About</a></li>
            <li><a href="#work" onClick={()=> setOpen(!open)}>Work</a></li>
            <li><a href="#skills" onClick={()=> setOpen(!open)}>Skills</a></li>
            <li><a href="#contact" onClick={()=> setOpen(!open)}>Contact</a></li>
        </Ul>
    )
}

export default RightNav