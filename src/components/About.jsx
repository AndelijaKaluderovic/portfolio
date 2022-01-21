import './about.css';
import aboutP from '../assets/about.svg';

const About = () => {
    return (
        <div className="about" id="about">
            <h2 className="heading">About me...</h2>
            <img src={aboutP} alt="about" className="about-photo" />
            <div className="about-wrapper">
                <div className="about-left">
                    <h3>Dev Journey</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum vulputate porta. Suspendisse ac congue nunc. Quisque tincidunt urna quis sagittis venenatis. Phasellus eros diam, tristique sit amet aliquet a, ullamcorper eget velit. Sed suscipit consequat lectus, aliquet viverra dolor mollis quis.</p>
                </div>
                <div className="about-right">
                    <h3>Hobies</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum vulputate porta. Suspendisse ac congue nunc. Quisque tincidunt urna quis sagittis venenatis. Phasellus eros diam, tristique sit amet aliquet a, ullamcorper eget velit. Sed suscipit consequat lectus, aliquet viverra dolor mollis quis.</p>
                </div>
            </div>
        </div>
    )
}

export default About
