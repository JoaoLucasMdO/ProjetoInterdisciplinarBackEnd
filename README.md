Integrantes do Projeto: Gesley Rosa, João Lucas 

Nosso projeto visa desenvolver uma API RESTful completa que permita a realização das operações básicas: GET, POST, PUT e DELETE, mapeando cada operação em rotas apropriadas em nosso servidor, e um Frontend básico que permita consumir as rotas criadas no Backend.

O tema do Frontend escolhido pelos integrantes foi de um site de venda de jogos, a tela inicial contendo todos os jogos cadastrados em nosso banco, podendo limitar a busca de jogos pelas opções de limite minimo e limite máximo fazendo com que os dados trazidos pelo GET na tela inicial atendam tais limites, a tela de login onde o administrador do site poderá logar para fazer o cadastro de novos jogos, a tela de cadastro onde os jogos serão cadastrados, e a tela de jogos cadastrados que permite a exclusão e a edição dos dados dos jogos.

Dependências 

express, mongoose, body-parser, jest, supertest

<div align="center">
    
![banner](https://github.com/JoaoLucasMdO/ProjetoInterdisciplinarBackEnd/blob/main/src/public/images/banner%20dewDoc.png?raw=true)
</div>
<br id="topo">
<p align="center">
    <a href="#sobre">Sobre</a>  |  
    <a href="#backlogs">Backlogs & User Stories</a>  |  
    <a href="#prototipo">Protótipo & Documentação</a>  |  
    <a href="#tecnologias">Tecnologias</a>  |  
    <a href="#equipe">Equipe</a>
</p>
   
<span id="sobre">

## :bookmark_tabs: Sobre o projeto
Após proposta de criação de software, sugerido pela Coordenação de curso, para o desenvolvimento de uma aplicação que tenha como finalidade o registro, edição, visualização e impressão de um documento, onde seja possível os professores realizarem a conferência e assinatura dos pontos indicando os horários de aula, a solução encontrada para o software, consiste em atendimento ao usuário com **ocupação acadêmica**, que pode acessar a aplicação com autenticação de usuário e senha, e realizar as atividades disponíveis, de criação, edição, e impressão.

> _Projeto baseado na metodologia ágil SCRUM, procurando desenvolver a Melhoria contínua, Comunicação, Colaboração e Atendimento aos prazos dos estudantes envolvidos_

:pushpin: Status do Projeto: **Em andamento: Proposta do Semestre finalizada** :heavy_check_mark:

### :clapper: Apresentação Final
Confira a seguir algumas etapas do sistema:
<details>
   <summary>Login</summary>
    <div align="center">
        <img src="https://user-images.githubusercontent.com/69374340/172084663-1e8ae95b-0c84-493c-b4ab-5cfcda5a4eb3.gif">
    </div>
</details>
<details>
   <summary>Usuário suporte</summary>
    <div align="center">
        <img src="https://user-images.githubusercontent.com/69374340/172084712-de2d2905-dc65-41af-97e8-f980eff5f2d1.gif">
    </div>
</details>
<details>
   <summary>Usuário administrador</summary>
    <div align="center">
        <img src="./usuario_administrador.gif">
    </div>
</details>
    
→ [Voltar ao topo](#topo)

<span id="backlogs">

## :dart: Backlogs & User Stories
    
<div align="center">
    
![product backlog](https://user-images.githubusercontent.com/69374340/172057734-320d9e43-19e9-409a-8f2d-7d159a1aaa9a.png)
![sprint backlog](https://user-images.githubusercontent.com/69374340/172057787-dcc1ecce-1b08-464b-850e-7019dc050056.png)
![user stories](https://user-images.githubusercontent.com/69374340/172057949-daade83b-8fec-4acc-a3cf-c4a26a3d3162.png)
</div>
  
→ [Voltar ao topo](#topo)

<span id="prototipo">

## :desktop_computer: Protótipo & Documentação
Como parte do planejamento do projeto foram criados wireframes e mockups para idealização do layout, que, ao ser validado pelo cliente, foram aplicados em um protótipo construído em React, possibilitando a interação do usuário com a interface (vide [entrega da primeira sprint](https://github.com/The-Bugger-Ducks/help-duck-documentation/blob/sprint-01/README.md)).
    
Por conta da arquitetura orientada a microsserviços adotada neste projeto, houve a descentralização e isolamento de responsabilidades entre o front-end e o back-end, garantindo que as funcionalidades fossem integradas a partir do consumo das APIs disponíveis, onde a documentação desses microsserviços, um dos requisitos não funcionais desejados para o projeto, foi praticada durante todo o desenvolvimento através de ferramentas como o Swagger ou readmes dos repositórios, mapeando todos os endpoints de cada API criada relacionada ao projeto, enquanto que para outras documentações do projeto como um todo, tais como os fluxos de dados, diagramas de classe e de uso, modelagem de banco de dados e arquiteturas foram condensadas em um guia PDF.
    
> 🔗 **Links gerais** <br>
> - Documentação do software: [clique aqui para acessar](./documentacao_geral.pdf)
> - Manual do usuário: [clique aqui para acessar](./manual_usuario.pdf)
> - Links para os repositórios criados:
>    - **Frontend:** [acessar help-duck-web](https://github.com/The-Bugger-Ducks/help-duck-web)
>    - **Microsserviços (backend):**
>       - **Usuários e equipamentos:** [acessar help-duck-register](https://github.com/The-Bugger-Ducks/help-duck-register)
>       - **Autenticação:** [acessar help-duck-authentication](https://github.com/The-Bugger-Ducks/help-duck-authentication)
>       - **Relatórios:** [acessar help-duck-dashboard](https://github.com/The-Bugger-Ducks/help-duck-dashboard)
>       - **Centro de soluções:** [acessar help-duck-solution-center](https://github.com/The-Bugger-Ducks/help-duck-solution-center)
>       - **Controle de chamados:** [acessar help-duck-tickets](https://github.com/The-Bugger-Ducks/help-duck-tickets)
> - Documentações das APIs:
>    - **Microsserviço de usuários e equipamentos:** [acessar Swagger](https://help-duck-register.herokuapp.com/swagger-ui/index.html#/)
>    - **Microsserviço de controle de chamados:** [acessar Swagger](https://help-duck-ticket.herokuapp.com/swagger-ui/index.html#/)
>    - **Microsserviço de problemas e soluções:** [acessar Swagger](https://help-duck-solution-center.herokuapp.com/swagger-ui/index.html#/)

→ [Voltar ao topo](#topo)

<span id="tecnologias">

## 🛠️ Tecnologias

As seguintes ferramentas, linguagens, bibliotecas e tecnologias foram usadas na construção do projeto:

<img src="https://img.shields.io/badge/Figma-CED4DA?style=for-the-badge&logo=figma&logoColor=DC143C" alt="Figma" /> 
<img src="https://img.shields.io/badge/TypeScript-CED4DA?style=for-the-badge&logo=typescript&logoColor=007ACC" alt="Typescript" />
<img src="https://img.shields.io/badge/HTML5-CED4DA?style=for-the-badge&logo=html5&logoColor=E34F26" alt="HTML" /> 
<img src="https://img.shields.io/badge/CSS3-CED4DA?style=for-the-badge&logo=css3&logoColor=1572B6" alt="CSS" /> 	
<img src="https://img.shields.io/badge/React-CED4DA?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /> 
<img src="https://img.shields.io/badge/Node.js-CED4DA?style=for-the-badge&logo=nodedotjs&logoColor=339933" alt="Node" />  
<img src="https://img.shields.io/badge/Java-CED4DA?style=for-the-badge&logo=java&logoColor=DC143C" alt="Java" />
<img src="https://img.shields.io/badge/MongoDB-CED4DA?style=for-the-badge&logo=mongodb&logoColor=4EA94B" alt="MongoDB" /><br>
<img src="https://img.shields.io/badge/Python-CED4DA?style=for-the-badge&logo=python&logoColor=yellow" alt="Python" />
<img src="https://img.shields.io/badge/VS_Code-CED4DA?style=for-the-badge&logo=visual%20studio%20code&logoColor=0078D4" alt="VS Code" /> 
<img src="https://img.shields.io/badge/Discord-CED4DA?style=for-the-badge&logo=discord&logoColor=7289DA" alt="Discord" /> 
<img src="https://img.shields.io/badge/GitHub-CED4DA?style=for-the-badge&logo=github&logoColor=20232A" alt="GitHub" /> 
<img src="https://img.shields.io/badge/Google%20Sheets-CED4DA?style=for-the-badge&logo=google-sheets&logoColor=34A853" alt="Google Sheets" /> 
<img src="https://img.shields.io/badge/Google%20Docs-CED4DA?style=for-the-badge&logo=google-sheets&logoColor=0D96F6" alt="Google Docs" />
    
→ [Voltar ao topo](#topo)

<span id="equipe">

## :busts_in_silhouette: Equipe

|    Função     | Nome                                  |                                                                                                                                                      LinkedIn & GitHub                                                                                                                                                      |
| :-----------: | :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Product Owner | João Marcos Oliveira Santos           |     [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/joaomarcosoliveiraa) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/JoaoM-py)              |
| Scrum Master  | Maria Gabriela Garcia dos Santos Reis |      [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/mariagabrielareis/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/MariaGabrielaReis)     |
|   Dev Team    | Antônio Alexandre R. Nepomuceno               |         [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/antonio-nepomuceno-04943720a/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/Nepoun)        |
|   Dev Team    | Caio Vitor Dias                   |         [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/caio-vitor-c1/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/CaioVitorDias1)        |
|   Dev Team    | Gabriel Camargo Leite                 |   [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-camargo-915452196/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/GabrielCamargoL)   |
|   Dev Team    | Giovana Thaís de Oliveira Silva       |           [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/gioliveirass) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/gioliveirass)          |
|   Dev Team    | Otávio Ferraroni Gonçalves Pane       |        [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/otavioferraronigpane/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/OtavioPane)            |
|   Dev Team    | Thiago Henrique Ferreira              | [![Linkedin Badge](https://img.shields.io/badge/Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/thiago-henrique-ferreira-2499a41a8/) [![GitHub Badge](https://img.shields.io/badge/GitHub-111217?style=flat-square&logo=github&logoColor=white)](https://github.com/ThHenrique) |

→ [Voltar ao topo](#topo)
