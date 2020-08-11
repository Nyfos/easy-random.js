<div align="center">
  <p>
    <a href="https://discord.gg/q6eMWS2"><img src="https://discordapp.com/api/guilds/616371260569681930/embed.png" alt="Serveur Discord" /></a>
    <a href="https://www.npmjs.com/package/easy-randomer"><img src="https://img.shields.io/npm/v/easy-randomer.svg?maxAge=3600" alt="Version NPM" /></a>
    <a href="https://www.npmjs.com/package/easy-randomer"><img src="https://img.shields.io/npm/dt/easy-randomer.svg?maxAge=3600" alt="Téléchargements NPM" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/easy-randomer/"><img src="https://nodei.co/npm/easy-randomer.png?downloads=true&stars=true" alt="Informations NPM" /></a>
  </p>
</div>

## À propos
easy-randomer est un module NPM simplifiant la génération de nombre aléatoire.

- Simple d'utilisation
- Utile
- Rapide mise en place

## Installation

`npm install easy-randomer`

## Exemple d'utilisation

```js
const Random = require("easy-randomer");

console.log(Random.round(0, 5)) // -> 0 | 1 | 2 | 3 | 4 | 5
console.log(Random.round(2, 7) // -> 2 | 3 | 4 | 5 | 6 | 7
```

## Méthodes

| Méthode    | Description                       | Retourne   |
| :--------- | :-------------------------------- | :--------- |
| `.round()` | Génère un nombre entier aléatoire | Number     |

## Arguments

| Méthode            | Argument       | Obligatoire |
| :----------------- | :------------- | :---------- |
| `.round(min, max)` | Number, Number | Oui         |

## Liens

* [GitHub](https://github.com/Nyfos/easy-randomer)
* [NPM](https://www.npmjs.com/package/easy-randomer)