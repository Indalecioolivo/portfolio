import "./MyProject.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";

export default function MyProject({
  mainImg,
  projectName,
  aboutProject,
  aboutFullInfo,
  technologiesUsed,
  id,
  photo1,
  photo2,
  photo3,
  art,
  linkDeploy,
  linkGitRepFront,
  linkGitRepBack,
}) {
  const { setProject } = useContext(GeneralContext);
  function handleClick(e) {
    setProject({
      mainImg,
      projectName,
      aboutProject,
      aboutFullInfo,
      technologiesUsed,
      id,
      photo1,
      photo2,
      photo3,
      art,
      linkDeploy,
      linkGitRepFront,
      linkGitRepBack,
    });
  }
  return (
    <div className="myproject-container">
      <img src={mainImg} alt="" />
      <div className="about-project">
        <h2>{projectName}</h2>
        <p>{aboutProject}</p>
        <div className="used-tecnology">
          <h3>Tecnologias Utilizadas</h3>
          {technologiesUsed.map((element) => (
            <img src={element} alt="" />
          ))}
        </div>
        <Link to={`/portfolio/${id}`}>
          <PrimaryButton
            textBtn="MAIS SOBRE"
            styleBtn="btn-gray"
            handleFunction={(e) => {
              handleClick(e);
            }}
          />
        </Link>
      </div>
    </div>
  );
}
