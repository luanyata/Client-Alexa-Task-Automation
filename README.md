<p align="center">
  <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/avs/docs/ux/branding/mark1._TTH_.png">
  <br/>
  <h1 align="center">💻 Alexa Task Automation - Cliente 🖥</h1>

  <p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/luanyata/Client-Alexa-Task-Automation?color=%2304D361">

  <a href="https://www.linkedin.com/in/luanyata/">
    <img alt="Made by Luan Yata" src="https://img.shields.io/badge/made%20by-LuanYata-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/luanyata/Client-Alexa-Task-Automation/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/luanyata/Client-Alexa-Task-Automation?style=social">
  </a>
</p>

Aplicação cliente para controle de PC / Mac por voz usando a Alexa.


## 🖥 Tecnologias:
- NodeJs
- Google Firestore

## 🛠 Feature em Desenvolvimento:

 - Abrir programa grafico (Mac)
 - Abrir programa terminal (Mac)



## 📃 Estrutura do documento no Firestore
- Collection User
  - Document UserId
    - Collection Inbound
    - Collection Outbound
      - DocumentId
        - Fields: {dateComand: nameCommand}


## 🎨 Padronização de Código
 - Eslint
 - Prettier
 - EditorConfig

 ## ䷭ Padronização dos Commits
  - Commitizen
  - Cz-Emoji

## 📕 Consulta Rapida de funções e operações no Firestore

### Snapshots:

- **Snapshot.docs( )** : Todos os documentos daquela coleção
- **Snapshot.empty** : Verifica se o snapshot está vazio
- **Snapshot.metadata** : Metadata do snapshot
- **snapshot.query** : Retorna a query utilizada na consulta do snapshot
- **Snapshot.size** : Retorna o numero de documentos do snapshot
- **snapshot.docChanges( )** : Retorna o array com as mudanças que o Snapshot sofreu


### Docs:
  - **Doc.data()** : Dado o documento
  - **Doc.id** : ID do documento
  - **doc.isEqual(other_doc)** : Verifica se um doc é igual a outro (exeto ID)
