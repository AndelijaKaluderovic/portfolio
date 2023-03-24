import skillsList from "../mock/skills.json";
import "./skills.css";

const Skills = () => {
  const skills = skillsList;
  return (
    <div className="skills" id="skills">
      <h2 className="heading">Key Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li>
            <img
              className="skill-icon"
              src={process.env.PUBLIC_URL + `/images/skills/${skill}.png`}
              alt={skill}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
