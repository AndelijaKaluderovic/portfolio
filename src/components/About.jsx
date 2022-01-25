import './about.css';
import aboutP from '../assets/about.svg';
import arrowU from '../assets/arrowUp.png'
import arrowP from '../assets/arrowDown.png';

const About = () => {
    return (
        <div className="about" id="about">
            <a href="#home"><img src={arrowU} alt="arrowUp" className="arrowUp" /></a>
            <h2 className="heading">About me...</h2>
            <img src={aboutP} alt="about" className="about-photo" />
            <div className="about-wrapper">
                <div className="about-left">
                    <h3>Dev Journey</h3>
                    <p>I started as a "hobby coder" over two years ago. My interest was sparked by the opportunity to create something from scratch, something almost unlimited yet tangible, something visual yet flexible depending on the need and industry. My journey started with the basics of web design, then moved on to the frontend and finally the backend. Today, I am a fullstack javascript developer who started software development in Belgrade, Serbia. Thanks to Salt Academy, I followed my passion and became part of the programming crew in Stockholm, Sweden.</p>
                </div>
                <div className="about-right">
                    <h3>Hobbies</h3>
                    <p>My biggest love growing up was indoor sports like volleyball, basketball and recently discovered Ultimate Frisbee. When I am not hanging out with friends or working out at the gym, I spend my time playing piano with the most amazing audience ever - my partner and two dog friends.
                        The rest of my time is somehow spent in the kitchen creating culinary experiments accompanied by dance moves from a younger time when I was a professional hip-hopper. I like to think of myself as a creative person and enjoy the fact that I have turned my hobby and interest in programming into my main job, programming.
                    </p>
                </div>
            </div>
            <a href="#work"><img src={arrowP} alt="arrowDown" className="arrowDown" /></a>
        </div>
    )
}

export default About
