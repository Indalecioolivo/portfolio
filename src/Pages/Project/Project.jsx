import "./Project.css";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
export default function Project() {
  const { project, setProject } = useContext(GeneralContext);

  return (
    <article className="project-container">
      <img src={project.art} alt="" />
      <div className="content-container">
        <div className="left-content">
          <h2>{project.projectName}</h2>
          <p>{project.aboutProject}</p>
          <h3>Tecnologias Utilizadas</h3>
          <div className="used-tecnology">
            {project.technologiesUsed.map((element) => (
              <img src={element} alt="" />
            ))}
          </div>
          <div className="for-buttons">
            {!project.linkDeploy ? (
              ""
            ) : (
              <a href={project.linkDeploy} target="_blank">
                <SecondaryButton styleBtn="btn-gray" textBtn="VISITAR DEPLOY" />
              </a>
            )}
            {!project.linkGitRepFront ? (
              ""
            ) : (
              <a href={project.linkGitRepFront} target="_blank">
                <SecondaryButton
                  styleBtn="btn-gray"
                  textBtn="VISITAR REPO FRONT"
                />
              </a>
            )}
            {!project.linkGitRepBack ? (
              ""
            ) : (
              <a href={project.linkGitRepBack} target="_blank">
                <SecondaryButton
                  styleBtn="btn-gray"
                  textBtn="VISITAR REPO BACK"
                />
              </a>
            )}
          </div>
        </div>
        <div className="right-content">
          <h3>Projeto</h3>
          <p>{project.aboutFullInfo}</p>
          <h3>Previews</h3>
          <img src={project.photo1} alt="" />
          {project.photo2 ? <img src={project.photo2} alt="" /> : ""}
          {project.photo3 ? <img src={project.photo3} alt="" /> : ""}
        </div>
      </div>
    </article>
  );
}
