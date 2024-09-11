# Welcome to Reactoms !

A React Components Library made with TypeScript, Sass & Vite


[![NPM Version](https://badgen.net/npm/v/reactoms)](https://www.npmjs.com/package/reactoms)
[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/reactoms)](https://github.com/philippebeck/reactoms)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/reactoms)](https://github.com/philippebeck/reactoms/tree/master)

[![NPM Downloads](https://badgen.net/npm/dw/reactoms)](https://www.npmjs.com/package/reactoms)
[![GitHub Last Commit](https://badgen.net/github/last-commit/philippebeck/reactoms)](https://github.com/philippebeck/reactoms/commits/master)


- [Welcome to Reactoms !](#welcome-to-reactoms-)
  - [Download](#download)
  - [Package](#package)
  - [Installation](#installation)
  - [Try](#try)
  - [Usage](#usage)
  - [Content](#content)
  - [Documentation](#documentation)

---

## Download

`git clone https://github.com/philippebeck/reactoms.git`  
or  
[Latest Release](https://github.com/philippebeck/reactoms/releases)  

---

## Package

NPM : `npm i reactoms`  
or  
Yarn : `yarn add reactoms`  

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
  - inside your pages : `import { Card, Collapse, Icon, Image, Link, List, Title } from 'reactoms'` for the components
  - inside your index.html : `<style rel="stylesheet" href="node_modules/reactoms/dist/style.css"></style>` for the style

---
## Content

Lib Assets :  
- **Style** => *imports variables & mixins + common styles*  
- **Style Variables** => *breakpoints, fonts, colors, transforms*  
- **Style Mixins** => *font-face & keyframes*  

Lib Atoms :  
- **Card** => *figure -> (figcaption)*  
- **Collapse** => *details -> summary + figure*  
- **Icon** => *i*  
- **Image** => *img*  
- **Link** => *a*  
- **List** => *ul -> li*  

Lib Molecules :  
- **Slider** => *figure -> (nav) + progress*  
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