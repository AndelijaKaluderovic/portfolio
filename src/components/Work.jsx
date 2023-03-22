import "./work.css";
import projectsList from "../mock/projects.json";
import githubIcon from "../assets/contact/github_transparent.png";

const Work = () => {
  const projects = projectsList;
  return (
    <div className="work" id="work">
      <h2 className="heading">My early projects</h2>
      <div className="wrapper">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <img
                src={
                  process.env.PUBLIC_URL + `/images/projects/${project.id}.png`
                }
                alt="project-screenshot"
                className="project-photo"
              />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="github" className="github-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
