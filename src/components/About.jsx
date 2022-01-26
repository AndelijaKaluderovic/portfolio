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
                    <p>My journey as a programmer began over two years ago. My interest was sparked by the possibility of creating something from scratch, something almost unlimited yet tangible, something visual yet flexible depending on the need and industry. I first got into the basics of web design, then the frontend, and finally the backend. Following my passion I moved from Belgrade (Serbia) to Stockholm and thanks to Salt Academy I am now a fullstack javascript developer and part of the programming crew in Stockholm.</p>
                </div>
                <div className="about-right">
                    <h3>Hobbies</h3>
                    <p>Growing up, my biggest love was indoor sports like volleyball, basketball and recently discovered Ultimate Frisbee. When I am not hanging out with friends or working out at the gym, I spend my time playing piano with the most amazing audience ever - my two dog friends. The rest of my time is somehow spent in the kitchen creating culinary experiments accompanied by dance moves from a younger time when I was a professional hip-hopper. I consider myself a versatile person and a nature lover, so a middsommar celebration with friends and some interesting topics is like a tailor-made for me.</p>
                </div>
            </div>
            <a href="#work"><img src={arrowP} alt="arrowDown" className="arrowDown" /></a>
        </div>
    )
}

export default About
