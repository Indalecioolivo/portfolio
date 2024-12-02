import "./Home.css";
import Photo from "../../assets/photo-home.png";
import ModelPhoto from "../../assets/model-photo.png";
import ArrowButton from "../../assets/arrow-button-about-me.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-container">
      <section>
        <img src={Photo} alt="" />
        <div className="apresentation">
          <h1>Olá, me chamo Indalecio, sou Desenvolvedor Web Full-Stack</h1>
          <a href="#my-area">
            <button>
              <div>
                <img src={ArrowButton} alt="" />
              </div>
              SOBRE MIM
            </button>
          </a>
        </div>
      </section>
      <article id="my-area">
        <img src={ModelPhoto} alt="" />
        <div className="about-me">
          <h2>Sobre Mim</h2>
          <p>
            Sou um <strong>Desenvolvedor Web Full-Stack</strong> em transição de
            carreira desde janeiro de 2023, resido na baixada Santista e sou
            natural de Minas Gerais.
            <br />
            Em minha jornada até o atual momento, após investir em um{" "}
            <strong>curso intensivo</strong> com duração de 12 meses, com aulas
            e testes realizados todos os dias das 14h as 21h,{" "}
            <strong>
              aprendi ferramentas e metodologias utilizadas diariamente no
              mercado de trabalho.{" "}
            </strong>
            <br />
            Tive a oportunidade de participar de projetos em equipe, como líder
            e também liderado, simulados com duração de 1 mês, onde aprendi e
            pratiquei sobre metodologias ágeis, e também pratiquei minhas
            habilidades através da produção de aplicações full-stack.
          </p>
          <Link to="/portfolio">
            <PrimaryButton styleBtn="btn-gray" textBtn="IR PARA PORTFÓLIO" />
          </Link>
        </div>
      </article>
    </section>
  );
}
