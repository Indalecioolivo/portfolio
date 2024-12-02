import "./Contact.css";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import WhatsAppImg from "../../assets/whatsapp.png";

export default function Contact() {
  return (
    <section className="contact-container">
      <article id="contact-me">
        <h2>Entre em Contato</h2>
        <p>
          Estou em busca de uma vaga de Estágio ou Junior, mas também faço
          projetos por fora. Em um futuro próximo, desejo me mudar para a cidade
          de Santos e melhorar minhas habilidades no inglês. Atualmente moro em
          Peruíbe e vou à Santos todos os dias para a faculdade, mas respondo
          rápido. Sinta-se à vontade para me chamar pelo WhatsApp.
        </p>
      </article>
      <article>
        <h3>Contato via WhatsApp</h3>
        <div>
          <a href="https://wa.me/5511944698742" target="_blank">
            <img src={WhatsAppImg} alt="" />
          </a>
        </div>
      </article>
      <article>
        <h3>Contato via Email</h3>
        <form
          action="https://formsubmit.co/indalecioolivo@gmail.com"
          method="POST"
        >
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" required />
          <label htmlFor="textcontact">Mensagem</label>
          <textarea id="textcontact" name="message" required></textarea>
          <PrimaryButton styleBtn="btn-blue" textBtn="ENVIAR" />
        </form>
      </article>
    </section>
  );
}
