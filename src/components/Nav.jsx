import './nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <div className="wrapper">
                <div className="left">
                    <h1 className="logo">AK</h1>
                </div>
                <div className="right">
                    <nav className="navigation">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#resume">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav
