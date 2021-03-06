<div align="center">
  <h1>Twitch bot</h1>
  <img src="https://img.shields.io/badge/node-%3E%3D12.0.0-%2368a063" alt="NODE Version">
  <a href="https://standardjs.com/"><img src="https://img.shields.io/badge/code%20style-standard.js-informational"></a>
  <img src="https://img.shields.io/david/samueldurantes/twitch-bot" alt="Dependecies">
  <img src="https://img.shields.io/github/repo-size/samueldurantes/twitch-bot" alt="Repository Size">
  <img src="https://img.shields.io/github/license/samueldurantes/twitch-bot" alt="License">
</div>

## Table of contents

- [About](#about)
- [Set up](#set-up)
  - [Install dependecies](#install-dependecies)
  - [Set environment variables](#set-environment-variables)
  - [Run](#run)
- [Default commands](#default-commands)
- [License](#license)

## About

I did this bot just for educational purposes, I don't have interessent continue constantly work this project. Do what you want with this project, always respecting the [license](https://github.com/samueldurantes/twitch-bot/blob/master/LICENSE).

## Set up

### Install dependecies
```bash
# This will install all required dependencies
$ yarn install
```
### Set environment variables
```bash
PREFIX=

BOT_USERNAME=
PASSWORD_OAUTH=
CHANNEL=

MONGO_URI=
```
### Run
```bash
# For production
$ yarn start

# For development
$ yarn dev
```

## Default commands
Name | Description | Usage |
-----|-------------|-------|
addCommand | Add custom command in database | `<commandName> <message>`
deleteCommand | Delete custom command from the database |`<commandName> <message>`

## License

Licensed under the [MIT License](https://github.com/samueldurantes/twitch-bot/blob/master/LICENSE).
