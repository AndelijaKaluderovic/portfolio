import './skills.css'
import awsP from '../assets/skills/aws.png';
import bootstrapP from '../assets/skills/bootstrap.png';
import cssP from '../assets/skills/css.png';
import dockerP from '../assets/skills/docker.png';
import expressP from '../assets/skills/aws.png';
import figmaP from '../assets/skills/figma.png';
import githubP from '../assets/skills/github.png';
import htmlP from '../assets/skills/html.png';
import jsP from '../assets/skills/js.png';
import mongodbP from '../assets/skills/mongodb.png';
import nodejsP from '../assets/skills/nodejs.png';
import postgresqlP from '../assets/skills/postgresql.png';
import reactP from '../assets/skills/react.png';
import reduxP from '../assets/skills/redux.png';
import tddP from '../assets/skills/tdd.png';


const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="skills-wrapper">
                <h2 className="heading"> Key Skills </h2>
                <ul className="skills-list">
                    <li>
                        <img
                            className="skills-icon"
                            src={htmlP}
                            alt="HTML"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={cssP}
                            alt="CSS"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={jsP}
                            alt="JavaScript"
                        />

                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={reactP}
                            alt="React"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={reduxP}
                            alt="Redux"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={bootstrapP}
                            alt="Bootstrap"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={nodejsP}
                            alt="NodeJS"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={expressP}
                            alt="Express"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={figmaP}
                            alt="Figma"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={postgresqlP}
                            alt="PostgreSQL"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={mongodbP}
                            alt="MongoDB"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={dockerP}
                            alt="Docker"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={githubP}
                            alt="Github"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={tddP}
                            alt="TDD"
                        />
                    </li>
                    <li>
                        <img
                            className="skills-icon"
                            src={awsP}
                            alt="AWS"
                        />
                    </li>
                </ul></div>
        </div>
    )
}

export default Skills
