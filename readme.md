
![example workflow](https://github.com/radek2s/Framework-Hero/actions/workflows/master.yml/badge.svg)

# 💡 Ideas? 
Share your ideas with us on [GitHub Discussions](https://github.com/radek2s/Framework-Hero/discussions). This is the place where we can discuss about the 
project and documentation improvements and ideas for the future. Some topic is not included in this project? No problem! Just let me know about it.
Have you noticed an semantic or language error in the documentation? Help me to fix that!

# [Framework Hero](https://radek2s.github.io/Framework-Hero/root/#/)

Idea to create this project were born in 2021 when me and my wife were trying to write a simple application in React. For me that was the first time when I get acquainted with this most popular Framework. But it looks very similar to other frameworks taht I used in my short JavaScript career. I've started my Frontend adventure using Angular 4 in 2017. Soon just after graduation in 2020 I was hired to company where used Vue.js framework to create User Interfaces to their Application. So that small incident with React made me aware that all that frameworks are very similar to each other. That is why I want to share with you my experience with all that frontend frameworks.

That project is a set of basic knowledge how to use specific framework with examples. I've tried to keep the page structure as more similar as I could to explain specific concepts regarding the framework used. Using  one of the three version of pages user can easily navigate and compare how to create specific thing using different framework. That could be a nice tool for someone who has knowledge about one framework and is searching for explanation how to do that in other one.

## Summary:
Simple project which main goal is to explain some Frontend concepts in different frameworks.

**Destinantion group**: beginners, intermediate developers

## Usage
Open specific page, find the topic that you are interested in and compare it with other framework opening the same topic in the same place.

**Framework pages**: 
- [Angular](https://radek2s.github.io/Framework-Hero/#/angular)
- [React](https://radek2s.github.io/Framework-Hero/#/react)
- [Vue.js](https://radek2s.github.io/Framework-Hero/#/vue)

*(All pages are auto-deployed on GitHub Pages using GitHub Actions CI so user will see always the latest version of documentation)*

## Realization:

This project can be divided into 3 smaller sub-projects that share the same page styles and semantic explanations. Main purpose of that was to show also the code differences.
Each of them is written using different framework but using the same language. Because Angular can be used only using TypeScript you will see that Vue.js and React application has been written using that Language to make it more easy to compare. The sub-project structure
was designed to match as possible to good-practices for each of that framework. 

## Future
It is an hobby project realized after work in my spare time to help other developers easily jump between that frameworks. Now it has the core functionality and basic knowledge explained but it will be evolving with time.

## What's new?
- Added MicroFrontend architecture
- Added "Lifecycle hooks" section
- Added "Component Extending" section


## MicroFrontends
Root application is a Shell for other micro frontends. Using Federation plugin we can perform a hot-module replacement of the code. In `vite.config.ts` there is a plugin called `federation()` where we need to define in `remotes` what we want to share and how it can be accessible. By default all manifests are called `remoteEntry.js`. Host application have to find this file to load exported components.

This solution allow to render various Frontend Frameworks in single page. This is the best solution for huge projects. Becouse code is splitted and the build process and deployment is simpified.

All assets are stored somewhere on the CDN so easily we can perform an update.

### Final thoughts

The most powerfull usage is within single Framework because export of the component is very simple. In more advanced configuration there are issues with Routing and mounting multiple frameworks.

We have to consider what is better: **MicroFornted** or **NPM Package** hosted somewhere?

### Related materials:
- https://www.angulararchitects.io/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-your-4-steps-guide/
- https://single-spa.js.org/docs/examples.html
- https://github.com/originjs/vite-plugin-federation