<div align="center">
    <img src="https://raw.githubusercontent.com/rodneysostras/quiz/main/.github/icon-readme.png" alt="" height="150em"/>
</div>

# 📃 Quiz

<div align="center">
    <img src="https://img.shields.io/badge/%F0%9F%9A%A7%20EM%20CONTRU%C3%87%C3%83O%20-90%25-brightgreen?style=for-the-badge" />
    <img src="https://shields.io/github/deployments/rodneysostras/quiz/production?style=for-the-badge&logo=appveyor" />
    <img src="https://img.shields.io/website-up-down-green-red/https/quiz.rodneysostras.me?style=for-the-badge"/>
    <img src="https://img.shields.io/github/repo-size/rodneysostras/quiz?style=for-the-badge"/>
    <img src="https://img.shields.io/github/languages/count/rodneysostras/quiz?style=for-the-badge"/>
    <img src="https://img.shields.io/github/issues/rodneysostras/quiz?style=for-the-badge"/>
    <!-- <img src="https://img.shields.io/github/license/rodneysostras/quiz?style=for-the-badge"/> -->
</div>

<br />

<div align="center"><a href="https://quiz.rodneysostras.me/"><b>DEMO GITHUB-PAGES - https://quiz.rodneysostras.me/</b></a></div>
<div align="center"><a href="https://quiz-rodneysostras.vercel.app/"><b>DEMO VERCEL - https://quiz-rodneysostras.vercel.app/</b></a></div>

<br />

<div align="center"><img src="https://raw.githubusercontent.com/rodneysostras/quiz/main/.github/previewer-readme.gif" alt="previwer quiz" height="450em"/></div>

<div align="center"><em>Uma aplicação Web para responder questionários de perguntas sobre conhecimento gerais com as seguintes tecnologias.</em></div>

<br />

<div align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
</div>

<br />

<p align="center">
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-requisitos">Requisitos</a> •
    <a href="#-recursos">Recursos</a> •
    <a href="#-como-executar-o-projeto">Como executar</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-autor">Autor</a> • 
    <a href="#-licença">Licença</a>
</p>

## 💻 Sobre o projeto

🤩 quiz - Uma aplicação Web em ReactJS para responder questionários de perguntas sobre conhecimento gerais.

> Uma challenge realizada para Wa Project que deve respeitar os requisitos abaixos.

## 🎯 Requisitos

- [x] Usuários pode escolhe quantidade de perguntas que deseja responder.
- [x] Uma página de checkout antes do teste.
    - [x] Deve conter um botão de start para realizar requisição API e iniciar o teste.
    - [x] Deve conter um botão de cancel para retorna a página de escolha de quantidade de perguntas.
- [x] Realização do quiz.
    - [x] Apresentar cada pergunta e suas opções de resposta.
    - [x] Contabilizar acertos e erros.
- [x] Termino do quiz (relatório).
    - [x] Mostrar quantidade de acerto e erros.
    - [x] Uma lista das questões destacando a que foi certo e errado.
    - [x] Na lista mostrar a resposta escolhida e a correta.
    - [x] Salva o relatório no localStorage.
- [x] Página de relatórios.
    - [x] Na página inicial mostrar os questionários salvos no localStorage.
    - [x] Rever o relatório salvo.

<br />

<blockquote>
• Descrição do problema

Imagine que você foi contratado para desenvolver uma aplicação WEB para responder questionários de perguntas sobre conhecimentos gerais. Ao acessar a página, o usuário deve escolher a quantidade de perguntas que deseja responder. Após escolher, deve aparecer uma página com dois botões, “Start” e “Cancel”. Ao selecionar “Cancel”, deve retornar para escolher a quantidade. Ao selecionar “Start” deve fazer requisição na URL disponibilizada, pegar as perguntas e a cada pergunta, deve exibir as respostas. O usuário deve escolher uma resposta e a cada resposta deve contabilizar quantidade de acertos e erros. Ao final, deve vir um relatório com a quantidade de acertos e erros e uma lista de cada questão e qual foi certo e qual foi errado. Nessa lista também deve aparecer a resposta escolhida e a resposta correta. A pontuação deve ser guardada em no localStorage. Na primeira página e se houver um questionário salvo no localStorage, deve ter a possibilidade de rever o relatório.

• Requisitos não funcionais

É obrigatório a utilização do framework React, Material UI e usar a URL para gerar as questões .......

• Requisitos não obrigatórios

Você será bem avaliado se usar Context API, Axio, Hooks, Formik, testes de comportamento e se você realizar um deploy em algum link. Além disso, vamos dar uma atenção maior quando demonstrar uma boa apresentação de design e uso de design patterns (como services, repositories, factories, builders e etc)

• Sobre o prazo?

Lembrando que prazo dado para nós é prazo cumprido e vamos prezar por aqueles candidatos que entregarem o projeto no prazo que pediu e com a coerência da tarefa (sabemos que vocês trabalham em outros locais e/ou estudam, isso será levado em consideração, não se preocupe).

</blockquote>

## 📦 Recursos

- [ ] Opções para personalizar o quiz.
    - [x] Categoria.
    - [ ] Dificuldade.
    - [ ] Tipos de respostas.
- [x] Salva a personalização do usuário para próximo uso.
- [ ] Dark theme.
- [x] Página 'not found'.
- [x] SEO.
- [x] Github Page - SPA routing.
- [x] Responsivo.

## 🚀 Como executar o projeto

```bash
# Clone este repositório
$ git clone git@github.com:rodneysostras/quiz.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd quiz
# Instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ npm run start
# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```


## 🛠 Tecnologias

-   **[React](https://reactjs.org/)** • Framework Javascript open source utilizado para criar interfaces de usuário em paginas web.
-   **[React router dom](https://v5.reactrouter.com/)** • Um componente que possibilita navegação entre componente gerando um roteamento de url.
-   **[React context api](https://pt-br.reactjs.org/docs/context.html)** • Disponibiliza uma forma de passar dados entre os componentes sem necessitar passar props.
-   **[Axios](https://github.com/axios/axios)** • Cliente HTTP leve semelhante à API Fetch nativa do JavaScript.
-   **[Material-UI](https://v4.mui.com/)** • Biblioteca de componentes React para construir UI (User Interface).
-   **[Formik](https://formik.org/)** • Componente para facilitar contrução de formulários.

> Veja o arquivo  [package.json](https://github.com/rodneysostras/quiz/blob/main/package.json)
## 🦸 Autor

<table align="left">
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/rodneysostras.png" width="150px;" alt="Foto do Rodney Sostras no GitHub"/><br>
        <sub>
          <b>Rodney Sostras</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
<p>
    &nbsp;&nbsp;
    <a href="https://github.com/rodneysostras">
        <img src="https://img.shields.io/badge/rodneysostras-000000?style=for-the-badge&logo=GitHub&logoColor=FFF" />
    </a>
</p>
<p>
    &nbsp;&nbsp;
    <a href="https://linkedin.com/in/rodney-sostras" alt="Linkedin do Rodney Sostras">
        <img src="https://img.shields.io/badge/-rodney--sostras-0077B5?style=for-the-badge&logo=Linkedin&logoColor=FFF"/>
    </a>
</p>
<p>&nbsp;&nbsp;
    <a href="mailto:contact@rodneysostras.me" alt="Email do Rodney Sostras">
        <img src="https://img.shields.io/badge/-contact@rodneysostras.me-D14836?style=for-the-badge&logo=Gmail&logoColor=FFF" />
    </a>
</p>
<p>&nbsp;&nbsp;
    <a href="https://rodneysostras.me/" alt="Web Site do Rodney Sostras">
        <img src="https://img.shields.io/badge/%F0%9F%8C%8E%20RODNEYSOSTRAS.ME%20-191919?style=for-the-badge" />
    </a>
</p>

<br />
      
## 📝 Licença

Este projeto esta sobe a licença [BSD-3](./LICENSE).

Feito com ❤️ por Rodney Sostras 👋🏽 [Entre em contato!](https://www.linkedin.com/in/rodney-sostras/)
        
<br />
        
<div align="right"><a href="#">Voltar ao topo ⬆</a></div>
