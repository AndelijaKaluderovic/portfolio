import './work.css'
import saltP from '../assets/projects/saltplatform.png';
import marvelpediaP from '../assets/projects/marvelpedia.png';
import todoappP from '../assets/projects/todoapp.png';
import weatherP from '../assets/projects/weatherapp.png';

const Work = () => {
    return (
        <div className="work" id="work">
            <h2 className="heading"
            >Some of my projects</h2>
            <div className="wrapper">
                <div className="project">
                    <a href="https://salt-platform.vercel.app/index" target="_blank" rel="noreferrer" className="project-link">
                        <img src={saltP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Salt Platform</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum vulputate porta. Suspendisse ac congue nunc. Quisque tincidunt urna quis sagittis venenatis. Phasellus eros diam, tristique sit amet aliquet a, ullamcorper eget velit. Sed suscipit consequat lectus, aliquet viverra dolor mollis quis.</p>
                    <div className="links">
                        <a href="https://github.com/AndelijaKaluderovic/salt-platform" target="_blank" rel="noreferrer">See the code</a>
                        <a href="https://salt-platform.vercel.app/index" target="_blank" rel="noreferrer">Try it</a>
                    </div>
                </div>
                <div className="project">
                    <a href="www.google.com" target="_blank" rel="noreferrer" className="project-link">
                        <img src={marvelpediaP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Marvelpedia</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum vulputate porta. Suspendisse ac congue nunc. Quisque tincidunt urna quis sagittis venenatis. Phasellus eros diam, tristique sit amet aliquet a, ullamcorper eget velit. Sed suscipit consequat lectus, aliquet viverra dolor mollis quis.</p>
                    <div className="links">
                        <a href="https://github.com/AndelijaKaluderovic/hackday-project" target="_blank" rel="noreferrer">See the code</a>
                        <a href="www.google.com" target="_blank" rel="noreferrer">Try it</a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://lucid-dubinsky-eb7b37.netlify.app/" target="_blank" rel="noreferrer"className="project-link">
                        <img src={todoappP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Todo App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum vulputate porta. Suspendisse ac congue nunc. Quisque tincidunt urna quis sagittis venenatis. Phasellus eros diam, tristique sit amet aliquet a, ullamcorper eget velit. Sed suscipit consequat lectus, aliquet viverra dolor mollis quis.</p>
                    <div className="links">
                        <a href="https://github.com/AndelijaKaluderovic/todoReactRedux" target="_blank" rel="noreferrer">See the code</a>
                        <a href="https://lucid-dubinsky-eb7b37.netlify.app/" target="_blank" rel="noreferrer">Try it</a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://flamboyant-heisenberg-5beb54.netlify.app/" target="_blank" rel="noreferrer" className="project-link">
                        <img src={weatherP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Weather App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum vulputate porta. Suspendisse ac congue nunc. Quisque tincidunt urna quis sagittis venenatis. Phasellus eros diam, tristique sit amet aliquet a, ullamcorper eget velit. Sed suscipit consequat lectus, aliquet viverra dolor mollis quis.</p>
                    <div className="links">
                        <a href="https://github.com/AndelijaKaluderovic/WeatherApp" target="_blank" rel="noreferrer">See the code</a>
                        <a href="https://flamboyant-heisenberg-5beb54.netlify.app/" target="_blank" rel="noreferrer">Try it</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
