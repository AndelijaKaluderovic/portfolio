import './home.css'
import profileP2 from '../assets/profile.png'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

const Home = () => {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            typeSpeed: 80,
            backDelay: 1630,
            backSpeed: 35,
            showCursor: false,
            strings: ["Developer", "Pianist", "Dog Owner"]
        })
    }, [])
    return (
        <div className="home" id="home">
            <div className="left">
                <div className="profile-image">
                    <img src={profileP2} alt="profileImage" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Angie</h1>
                    <h3>Passionate  <span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}

export default Home
