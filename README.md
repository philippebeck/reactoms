# Welcome to Reactoms !

A React Components Library made with TypeScript, Sass, Vite & Atomic Design : Card, Collapse, Icon, Image, Link, List for Atoms & Button, Footer, Gallery, Navbar, Slider, Title for Molecules

[![NPM Version](https://badgen.net/npm/v/reactoms)](https://www.npmjs.com/package/reactoms)

[![GitHub Last Commit](https://badgen.net/github/last-commit/philippebeck/reactoms)](https://github.com/philippebeck/reactoms/commits/master)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4ee9874423b24e0082a00d406627d9c2)](https://app.codacy.com/gh/philippebeck/reactoms/dashboard)

[![GitHub Top Language](https://img.shields.io/github/languages/top/philippebeck/reactoms)](https://github.com/philippebeck/reactoms)
[![Code Size](https://img.shields.io/github/languages/code-size/philippebeck/reactoms)](https://github.com/philippebeck/reactoms/tree/master)

- [Welcome to Reactoms !](#welcome-to-reactoms-)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Content](#content)
  - [Documentation](#documentation)

---

## Installation

Type this command inside your terminal at the root of your project :  
`npm i reactoms`  

---

## Usage

1. If you change the components code, you need to compile them :  
`npm run build`  

1. Then use the compiles files of the dist folder for your prod UI like this (*choose the components you want*) :  
  - inside your pages : `import { Button, Card, Collapse, Footer, Gallery, Icon, Image, Link, List, Navbar, Slider, Title } from 'reactoms'` for the components  
-  inside your index.html : `<style rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.min.css"></style>` for the icons  
  - inside your index.html again : `<style rel="stylesheet" href="node_modules/reactoms/dist/style.css"></style>` for the style  

---
## Content

Assets :  
- **Style** => *imports variables & mixins + common styles*  
- **Style Variables** => *breakpoints, fonts, colors, transforms*  
- **Style Mixins** => *font-face & keyframes*  

Atoms :  
- **Card** => *figure -> (figcaption)*  
- **Collapse** => *details -> summary + figure*  
- **Icon** => *i*  
- **Image** => *img*  
- **Link** => *a*  
- **List** => *ul -> li*  

Molecules :  
- **Button** => *Link -> Icon + (b)*  
- **Footer** => *footer -> List -> Button*  
- **Gallery** => *List -> Link -> (Card -> Image + Title + List -> Icon)*
- **Navbar** => *nav -> Button + (List -> Button) + Button*  
- **Slider** => *figure -> (nav -> Icon) + progress*  
- **Title** => *hgroup -> (p -> Icon) + h1 | h2 | h3 | h4 + (p)*  

---

## Documentation

- [**TypeScript**](https://www.typescriptlang.org)  
- [**React**](https://react.dev)  
- [**Sass**](https://sass-lang.com)  
- [**Vite**](https://vitejs.dev)  
