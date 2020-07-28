# Be The Hero

<p align="center">
    <img src="https://github.com/felipedmsantos95/be-the-hero/blob/master/img/omnistack11.jpg"/>
    </br>
    <a href="readme_en.md">English</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="readme.md">Português</a>&nbsp;&nbsp;&nbsp;
</p>

## Prévia da Aplicação Web

<p align="center">
  <img src="https://github.com/felipedmsantos95/be-the-hero/blob/master/img/bethehero.gif"/>
</p>

## Screenshots App Mobile

<p align="center">
  <img src="https://github.com/felipedmsantos95/be-the-hero/blob/master/img/incidents.png"/>
  <img src="https://github.com/felipedmsantos95/be-the-hero/blob/master/img/detail.png"/>
</p>

## Sobre

Aplicação desenvolvida na Semana Omnistack 11 da [Rocketseat](https://github.com/Rocketseat), uma plataforma web para que ONG's cadastrem causas que necessitem de apoio. Pessoas interessadas em ajudar podem através do app mobile entrar em contato com a ONG via email ou whatsapp.

## Tecnologias utilizadas

- React.js para front-end
- React-Native para app mobile
- Node.js para back-end
- Banco de dados SQLite


## Requisitos

Para executar os módulos do projeto é necessário ter os seguintes requisitos instalados no sistema:

- Node 12.x ou superior
- Yarn 1.21 ou superior
- Expo-cli 3.15 ou superior

## Executando o projeto

### Clonando o projeto

```bash
$ git clone https://github.com/felipedmsantos95/be-the-hero
$ cd be-the-hero
```

### Executando Backend

1. Para rodar a API pela primeira vez, acessar o diretório ./backend/ e executar o comando abaixo para instalar as dependências:

		npm i

2. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o backend da aplicação, por padrão ele estará disponível para requisições através da porta 3333 no endereço http://localhost:3333/:

		npm start

### Testes no Backend

1. Para verificar o script dos testes que foram feitos no desenvolvimento da aplicação, acessar o diretório ./backend/ e executar o comando abaixo:

		npm test


### Executando Frontend Web

Com o backend sendo executado, pode-se executar os passos abaixo para rodar o frontend da aplicação localmente.

1. Acessar o diretório ./frontend/ e executar o comando abaixo para instalar as dependências:

		yarn

2. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o frontend da aplicação:

		yarn start

3. Feito isso, através de um navegador de internet (preferencialmente o Chrome ou o Firefox), através do endereço abaixo, será possível interagir com a aplicação desenvolvida.

		http://localhost:3000/

### Executando App Mobile

1. Instalar o aplicativo [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) em seu smartphone e o conectar na mesma rede que o servidor back-end.

2. Acessar o diretório ./mobile/ e executar o comando abaixo para instalar as dependências:

		yarn

3. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o cliente expo em seu navegador web padrão:

		yarn start

4. Em seu smartphone abra o app expo e no modo LAN, faça o scan do QRCode fornecido em seu navegador web.
