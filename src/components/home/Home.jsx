import React from "react";
import "./home.scss";
import { Parallax } from "react-parallax";
import Parking from "../images/parking.png";
import Pass from "../images/pass.png";
import NFC from "../images/nfc.png";

function Home() {
  return (
    <div className="Home">
      <Parallax strength={300} bgImage={Parking}>
        <div className="content">
          <div className="text-content">VitalData</div>
        </div>
      </Parallax>

      <div class="container">
        <h2>Quem somos</h2>
        <p>
        Somos a VitalData, uma equipe dedicada à análise contínua de dados de saúde. Nossa missão é implementar um sistema inovador que monitora em tempo real informações cruciais dos pacientes. Através da vigilância dos sinais vitais, padrões de sono, atividade física e outros indicadores relevantes, buscamos oferecer um acompanhamento abrangente e preciso, permitindo uma visão holística da saúde individual.
        </p>
        Nosso compromisso reside na criação de soluções tecnológicas que capacitam profissionais de saúde a tomarem decisões informadas e ágeis. Ao fornecer acesso imediato a dados precisos e em tempo real, buscamos não apenas melhorar a qualidade dos cuidados, mas também promover uma abordagem preventiva, antecipando potenciais problemas de saúde e facilitando intervenções proativas para uma vida mais saudável e equilibrada.
        <p>
          .
        </p>
      </div>

      <Parallax strength={300} bgImage={Pass}>
        <div className="content">
          <div className="text-content">VitalData</div>
        </div>
      </Parallax>

      <div class="container">
        <h2>O que fazemos</h2>
        <p>
        Na VitalData, nossa expertise reside na implementação de sistemas avançados de monitoramento de saúde. Desenvolvemos e integramos tecnologias de ponta para capturar, analisar e interpretar dados vitais dos pacientes em tempo real. Através de algoritmos inteligentes e interfaces intuitivas, oferecemos um panorama detalhado da saúde, permitindo que profissionais médicos atuem com precisão e rapidez no diagnóstico e tratamento.
        </p>

        <p>
        Além disso, nossa equipe se dedica à pesquisa contínua, aprimorando constantemente nossos sistemas para garantir a mais alta qualidade na coleta e interpretação de dados de saúde. Ao abraçar a inovação e a integridade dos dados, buscamos não apenas oferecer informações confiáveis, mas também impulsionar avanços significativos na saúde digital, tornando-a acessível e valiosa para todos os usuários e profissionais envolvidos.
        </p>
      </div>

      <Parallax strength={300} bgImage={NFC}>
        <div className="content">
          <div className="text-content">VitalData</div>
        </div>
      </Parallax>

      <div class="container">
        <h2>Nossa tecnologia</h2>
        <p>
        Na VitalData, nossa tecnologia é a espinha dorsal da revolução na análise de dados de saúde. Utilizamos um sistema integrado de última geração, combinando sensores avançados e algoritmos de aprendizado de máquina para coletar e processar uma ampla gama de informações. Essa abordagem nos permite monitorar em tempo real sinais vitais, padrões de sono, atividade física e outros indicadores cruciais, oferecendo uma visão abrangente do bem-estar dos pacientes.
        </p>

        <p>
        Nossa plataforma é construída com foco na precisão e na facilidade de uso. Com interfaces intuitivas e análises profundas, fornecemos ferramentas poderosas para profissionais de saúde tomarem decisões informadas. Investimos continuamente em pesquisa e desenvolvimento para garantir que nossa tecnologia permaneça na vanguarda, impulsionando a saúde digital e oferecendo soluções confiáveis e eficazes para a análise contínua de dados de saúde.
        </p>
      </div>
    </div>
  );
}
export default Home;