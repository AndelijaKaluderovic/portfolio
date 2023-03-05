import './work.css'
import saltP from '../assets/projects/saltplatform.png';
// import marvelpediaP from '../assets/projects/marvelpedia.png';
import todoappP from '../assets/projects/todoapp.png';
import weatherP from '../assets/projects/weatherapp.png';
// import expensifyP from '../assets/projects/expensify.png';
import shoppingP from '../assets/projects/shoppingcart.png';
import arrowU from '../assets/arrowUp.png'
import arrowP from '../assets/arrowDown.png';

const Work = () => {
    return (
        <div className="work" id="work">
            <a href="#about"><img src={arrowU} alt="arrowUp" className="arrowUp" /></a>
            <h2 className="heading"
            >My early projects</h2>
            <div className="wrapper">
                {/* <div className="project">
                    <a href="https://rocky-earth-21417.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                        <img src={expensifyP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Expensify App</h3>
                    <p>Expensify App will help you to take control over your spending. After adding expenses, the user will be able to sort them by date or by amount, search by name, filter the existing expenses so you can see the expenses for a particular month or if the user doesn't have to track the expense anymore, can remove it. For better tracking, it is possible to enter a 'note' for expenses, while 'description' and 'amount' are required. The data is private since the user must log in with Google (Gmail) before creating an expenses list.</p>
                    <div className="links">
                        <a href="https://rocky-earth-21417.herokuapp.com/" target="_blank" rel="noreferrer" className="active">Try the app</a>
                        <a href="https://github.com/AndelijaKaluderovic/ExpensifyApp" target="_blank" rel="noreferrer">See the code</a>
                    </div>
                </div> */}
                <div className="project">
                    <a href="https://quizzical-volhard-51d50f.netlify.app/" target="_blank" rel="noreferrer" className="project-link">
                        <img src={shoppingP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Shopping Cart</h3>
                    <p>This is an E-commerce app that represents a minimal online shopping solution (result of a company code test assignment). As a user you will be able to browse the products, see the details for selected product, modify quantity and/or remove the item from the cart. There was a time limit (24 hours) for this project to be done, so it only includes the minimal functionalities without database and payment process.</p>
                    <div className="links">
                        <a href="https://quizzical-volhard-51d50f.netlify.app/" target="_blank" rel="noreferrer" className="active">Try the app</a>
                        <a href="https://github.com/AndelijaKaluderovic/Shopping_Cart" target="_blank" rel="noreferrer">See the code</a>
                    </div>
                </div>
                <div className="project">
                    <a href="https://salt-platform.vercel.app/index" target="_blank" rel="noreferrer" className="project-link">
                        <img src={saltP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Salt Platform</h3>
                    <p>Salt Platform is the result of a group final project in the Salt programme. Together with other team members, I created desktop platform, which contains hand-picked useful links that Salt students can use to prepare for bootcamp. It is also the central place for current students to find, save, and share educational materials, tutorials, labs, Github repositories, demos, and presentations.</p>
                    <div className="links">
                        <a href="https://salt-platform.vercel.app/index" target="_blank" rel="noreferrer" className="active">Try desktop app</a>
                        <a href="https://github.com/AndelijaKaluderovic/salt-platform" target="_blank" rel="noreferrer">See the code</a>
                    </div>
                </div>
                {/* <div className="project">
                    <a href="https://powerful-beyond-95375.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                        <img src={marvelpediaP} alt="project-screenshot" className="project-photo" />
                    </a>
                    <h3>Marvelpedia</h3>
                    <p>This is the app I created under the strict time limit during the intensive Salt Academy programme. I was tasked to create a React/Express app of my choice within 1 day. As a fan of superheroes and comics, I decided to create an easily accessible and searchable mini-encyclopedia with information about each of the Marvel characters.</p>
                    <div className="links">
                        <a href="https://powerful-beyond-95375.herokuapp.com/" target="_blank" rel="noreferrer" className="active">Try the app</a>
                        <a href="https://github.com/AndelijaKaluderovic/hackday-project" target="_blank" rel="noreferrer">See the code</a>
                    </div>
                </div> */}
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
