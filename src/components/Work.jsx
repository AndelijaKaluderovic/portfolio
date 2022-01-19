import './work.css'

const Work = () => {
    return (
        <div className="work" id="work">
           <h2>Some of my projects</h2>
           <div className="wrapper">
               <div className="project">
                   <a href="#" className="project-link">
                       <img src="" alt="" className="project-photo" />
                   </a>
                   <h3>Project Name</h3>
                   <p> Project description</p>
               </div>
               <div className="project">
                   <a href="#" className="project-link">
                       <img src="" alt="" className="project-photo" />
                   </a>
                   <h3>Project Name</h3>
                   <p> Project description</p>
               </div>
               <div className="project">
                   <a href="#" className="project-link">
                       <img src="" alt="" className="project-photo" />
                   </a>
                   <h3>Project Name</h3>
                   <p> Project description</p>
               </div>
           </div>
        </div>
    )
}

export default Work
