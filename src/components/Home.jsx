import './home.css'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

const Home = () => {
    const textRef = useRef()
    useEffect(() => {
      init(textRef.current, {
          showCursor: false,
          strings: ["JavaScript Developer", "Pianist", "Dog Owner"]
      })
    }, [])
    return (
        <div className="home" id="home">
            <div className="left">
                <div className="profileImage">
                    <img src="assets/profile.png" alt="profileImage" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Angie</h1>
                    <h3>Fullstack  <span ref={textRef}></span></h3>
                </div>
                <a href="#about"><img src="assets/arrowDown.png" alt="arrowDown" /></a>
            </div>
        </div>
    )
}

export default Home
