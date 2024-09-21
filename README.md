# Welcome to Reactoms !

A React Components Library made with TypeScript, Sass, Vite & Atomic Design : Card, Collapse, Icon, Image, Link, List for Atoms & Button, Footer, Gallery, Navbar, Slider, Title for Molecules

[![NPM Version](https://badgen.net/npm/v/reactoms)](https://www.npmjs.com/package/reactoms)
[![GitHub Last Commit](https://badgen.net/github/last-commit/philippebeck/reactoms)](https://github.com/philippebeck/reactoms/commits/master)

[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/reactoms)](https://github.com/philippebeck/reactoms)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/reactoms)](https://github.com/philippebeck/reactoms/tree/master)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4ee9874423b24e0082a00d406627d9c2)](https://app.codacy.com/gh/philippebeck/reactoms/dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/59a03533d053fcf1ecbc/maintainability)](https://codeclimate.com/github/philippebeck/reactoms/maintainability)

- [Welcome to Reactoms !](#welcome-to-reactoms-)
  - [Installation](#installation)
  - [NPM](#npm)
  - [CDN](#cdn)
  - [GitHub](#github)
  - [Try](#try)
  - [Usage](#usage)
  - [Content](#content)
  - [Documentation](#documentation)

---

## Installation

Choose one of the following methods :  
- **NPM** => *Node Package Manager*  
- **CDN** => *Content Delivery Network*  
- **GitHub** => *Clone the repository or download the latest release*  

---

## NPM

Type this command inside your terminal at the root of your project :  
`npm i reactoms`  

---

## CDN

Add this stylesheet to the head of your index.html :  
`https://cdn.jsdelivr.net/npm/reactoms@0.4.0/dist/style.min.css`  

Add this script at the end of the body of your index.html :  
`https://cdn.jsdelivr.net/npm/reactoms@0.4.0/dist/index.umd.min.js`  

---

## GitHub

`git clone https://github.com/philippebeck/reactoms.git`  
or  
[Latest Release](https://github.com/philippebeck/reactoms/releases)  

---

## Try

Run the Welcome UI to try the components :  
`npm start`  

---

## Usage

Process usage after NPM installation :  

1. If you change the components code, you need to compile them :  
`npm run build`  

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
- **Button** => *Link -> Icon + (b)*  
- **Footer** => *footer -> List -> Button*  
- **Gallery** => *List -> Link -> (Card -> Image + Title + List -> Icon)*
- **Navbar** => *nav -> List -> Button*  
- **Slider** => *figure -> (nav -> Icon) + progress*  
- **Title** => *hgroup -> (p -> Icon) + h1 | h2 | h3 | h4 + (p)*  

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
