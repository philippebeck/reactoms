# Welcome to Reactive !

A React Components Library made with TypeScript, Sass & Vite


[![NPM Version](https://badgen.net/npm/v/reactive)](https://www.npmjs.com/package/reactive)
[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/reactive)](https://github.com/philippebeck/reactive)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/reactive)](https://github.com/philippebeck/reactive/tree/master)

[![NPM Downloads](https://badgen.net/npm/dt/reactive)](https://www.npmjs.com/package/reactive)
[![GitHub Last Commit](https://badgen.net/github/last-commit/philippebeck/reactive)](https://github.com/philippebeck/reactive/commits/master)


- [Welcome to Reactive !](#welcome-to-reactive-)
  - [Download](#download)
  - [Package](#package)
  - [Installation](#installation)
  - [Try](#try)
  - [Usage](#usage)
  - [Content](#content)
  - [Documentation](#documentation)

---

## Download

`git clone https://github.com/philippebeck/reactive.git`  
or  
[Latest Release](https://github.com/philippebeck/reactive/releases)  

---

## Package

NPM : `npm i reactive`  
or  
Yarn : `yarn add reactive`  

---

## Installation

Install the dependencies :  
`$ npm i`  

---

## Try

Run the Welcome UI to try the components :  
`$ npm start`  

---

## Usage

1. If you change the components code, you need to compile them :  
`$ npm run build`  

2. Then use the compiles files of the dist folder for your prod UI like this :  
  - inside your pages : `import { Card, Collapse, Icon, Image, Link, List, Title } from 'reactive'` for the components
  - inside your index.html : `<style rel="stylesheet" href="node_modules/reactive/dist/style.css"></style>` for the style

---
## Content

Lib Assets :  
- **Style** => *imports variables & mixins + common styles*  
- **Style Variables** => *breakpoints, fonts, colors, transforms*  
- **Style Mixins** => *font-face & keyframes*  

Lib Components :  
- **Card** => *figure -> (figcaption)*  
- **Collapse** => *details -> summary + figure*  
- **Icon** => *i*  
- **Image** => *img*  
- **Link** => *a*  
- **List** => *ul -> li*  
- **Title** => *hgroup -> (p) + h1 | h2 | h3 | h4 + (p)*  

Src Assets :  
- **Logos** => *ts, react, sass, vite*

Src App :  
- **App** => *Homepage to test the library*

---

## Documentation

- [**TypeScript**](https://www.typescriptlang.org)  
- [**React**](https://react.dev)  
- [**Sass**](https://sass-lang.com)
- [**Vite**](https://vitejs.dev)