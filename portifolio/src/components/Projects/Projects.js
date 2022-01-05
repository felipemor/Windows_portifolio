import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Brute Force"
              description="Este script irá consultar os NS do domínio especificado, após isso ele irá forçar a transferência em cada NS encontrado. nal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/felipemor/Brute-force-Transferencia-de-Zona"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Brute-force-DNS-reverse"
              description="Vamos criar um script que realizará a consulta de DNS reverso, o qual irá resolver o endereço IP buscando o nome de domínio associado ao host. "
              link="https://github.com/felipemor/Brute-force-DNS-reverse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=" Brutal-Force-direct-search-DNS  "
              description="Para agilizar o processo de pesquisa direta de DNS é importante termos scripts que automatizem esse processo, por exemplo, o processo de busca de subdomínios é algo que pode tomar muito tempo de um atacante e com scripts é possível obter resultados rapidamente"
              link="https://github.com/felipemor/brutal-Force-direct-search-DNS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Python keylogger "
              description=" Advanced Keylogger written in Python with features including taking screenshots, recording microphone, gather clipboard contents, and getting system information"  
              link="https://github.com/felipemor/python-keylogger-advanced"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=" Emissor-de-notas-Fiscais "
              description="Emissor de notas fiscais seguro"
              link="https://github.com/felipemor/Emissor-de-notas-Fiscais-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Projeto de estudo - Bankflix"
              description="O projeto Bankflix simula um banco digital, contendo a área do cliente e administrativa, permitindo depósitos e transferências entre contas do mesmo banco."
              link="https://github.com/felipemor/Melhorias-Bankflix/tree/master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
