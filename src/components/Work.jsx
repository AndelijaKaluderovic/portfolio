import './work.css'
import saltP from '../assets/projects/saltplatform.png';
import marvelpediaP from '../assets/projects/marvelpedia.png';
import todoappP from '../assets/projects/todoapp.png';
import weatherP from '../assets/projects/weatherapp.png';
import arrowU from '../assets/arrowUp.png'
import arrowP from '../assets/arrowDown.png';

const Work = () => {
    return (
        <div className="work" id="work">
            <a href="#about"><img src={arrowU} alt="arrowUp" className="arrowUp" /></a>
            <h2 className="heading"
            >My projects</h2>
            <div className="wrapper">
                <div className="project">
                    <a href="https://salt-platform.vercel.app/index" target="_blank" rel="noreferrer" className="project-link">
                        <img src={saltP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Salt Platform ( for desktop )</h3>
                    <p>Salt Platform is the result of a group final project in the Salt programme. Together with other team members, I created desktop platform, which contains hand-picked useful links that prospective students and current Salt students can use to prepare for bootcamp. It is also the central place for current students to find, save, and share educational materials, tutorials, labs, Github repositories, demos, and presentations.</p>
                    <div className="links">
                        <a href="https://salt-platform.vercel.app/index" target="_blank" rel="noreferrer" className="active">Try the app</a>
                        <a href="https://github.com/AndelijaKaluderovic/salt-platform" target="_blank" rel="noreferrer">See the code</a>
                    </div>
                </div>
                <div className="project">
                    {/* <a href="www.google.com" target="_blank" rel="noreferrer" className="project-link"> */}
                        <img src={marvelpediaP} alt="project-screenshot" className="project-photo" />
                    {/* </a> */}
                    <h3>Marvelpedia</h3>
                    <p>This is the app I created under the strict time limit during the intensive Salt Academy programme. I was tasked to create a React/Express app of my choice within 1 day. As a fan of superheroes and comics, I decided to create an easily accessible and searchable mini-encyclopedia with information about each of the Marvel characters.</p>
                    <div className="links">
                        {/* <a href="www.google.com" target="_blank" rel="noreferrer" className="active">Try the app</a> */}
                        <a href="https://github.com/AndelijaKaluderovic/hackday-project" target="_blank" rel="noreferrer">See the code</a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://lucid-dubinsky-eb7b37.netlify.app/" target="_blank" rel="noreferrer" className="project-link">
                        <img src={todoappP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Todo App</h3>
                    <p>The Todo App, or personal to-do list, is meant to serve as a planner for tasks. Users can easily add, edit, remove or hide the listed tasks. Each task is stored locally, eliminating the need to use databases. The application is coded in React, while state management is done with Redux.</p>
                    <div className="links">
                        <a href="https://lucid-dubinsky-eb7b37.netlify.app/" target="_blank" rel="noreferrer" className="active">Try the app</a>
                        <a href="https://github.com/AndelijaKaluderovic/todoReactRedux" target="_blank" rel="noreferrer">See the code</a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://flamboyant-heisenberg-5beb54.netlify.app/" target="_blank" rel="noreferrer" className="project-link">
                        <img src={weatherP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Weather App</h3>
                    <p>The first application I have ever created using javascript. It is a real-time global weather app powered by Open Weather API services. The UI is kept simple, clean and easy to use. The app was created while participating in SheCodes workshops.</p>
                    <div className="links">
                        <a href="https://flamboyant-heisenberg-5beb54.netlify.app/" target="_blank" rel="noreferrer" className="active">Try the app</a>
                        <a href="https://github.com/AndelijaKaluderovic/WeatherApp" target="_blank" rel="noreferrer">See the code</a>
                    </div>
                </div>
            </div>
            <a href="#skills"><img src={arrowP} alt="arrowDown" className="arrowDown" /></a>
        </div>
    )
}

export default Work
