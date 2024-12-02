import "./Portfolio.css";
import MyProject from "../../components/MyProject/MyProject";
import myProjectsInfos from "../../db/dbprojects";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="portfolio-container">
      <section className="to-recruiters">
        <div>
          <h3>Para Recrutadores:</h3>
          <p>
            Em janeiro de 2024 comecei a cursar{" "}
            <strong>Sistemas de Informação</strong> na <br />
            USC-Santos, e nesse momento já estou entrando no 3º Semestre do
            curso.
            <br />
            Os componentes abaixo representam alguns dos projetos que já
            realizei, e ao clicar em <strong>"MAIS SOBRE"</strong>, poderá ver
            informações tanto sobre o que o projeto faz, quanto sobre as
            tecnologias utilizadas.
          </p>
        </div>
        <div>
          <h3>Para Recrutadores Desenvolvedores:</h3>
          <p>
            Caso queira analisar ou testar meus códigos, ao clicar em
            <strong> "MAIS SOBRE"</strong>, haverá links para o repositório do
            projeto no git hub.
            <br />
            Além de acessar o histórico de commits e ver como foi o processo de
            desenvolvimento, também poderá forkar os repositórios para testar,
            mas não se esqueça de criar um banco de dados utilizando o dump,
            além é claro de configurar as variáveis de ambiente.
          </p>
        </div>
      </section>
      {myProjectsInfos.map((project) => (
        <MyProject
          mainImg={project.mainImg}
          projectName={project.projectName}
          aboutProject={project.aboutProject}
          aboutFullInfo={project.aboutFullInfo}
          technologiesUsed={project.technologiesUsed}
          key={project.id}
          art={project.art}
          photo1={project.photo1}
          photo2={project.photo2}
          photo3={project.photo3}
          linkDeploy={project.linkDeploy}
          linkGitRepFront={project.linkGitRepFront}
          linkGitRepBack={project.linkGitRepBack}
          id={project.id}
        />
      ))}
    </section>
  );
}
