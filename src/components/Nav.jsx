import './nav.css'
// import ak from '../assets/ak.png'

const Nav = () => {
    return (
        <div className="nav">
            <div className="wrapper">
                <div className="left">
                    {/* <img className="nav-logo" src={ak} alt="logo"/> */}
                    <h1 className="logo">AK</h1>
                </div>
                <div className="right">
                    <nav className="navigation">
                        <ul className="navigation-list">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav
