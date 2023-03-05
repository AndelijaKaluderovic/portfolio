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
                    <p>My journey as a software developer began in 2020, sparked by the possibility of creating innovative and visually appealing solutions from scratch. I first delved into the basics of web design before diving into frontend development and grasping the fundamentals of backend development. Motivated by my passion for the field, I relocated from Belgrade to Stockholm and am proud to have undergone extensive training with the Salt Academy to become a proficient JavaScript developer. I am now privileged to be part of an esteemed programming team in Stockholm as a Frontend Developer, where I continually refine my skills and drive to innovate.</p>
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
