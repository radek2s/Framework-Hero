// import {render} from 'react-dom';
// import './index.css';
// import 'react-highlight/node_modules/highlight.js/styles/atom-one-dark.css'
// import './i18n'
// import React from 'react';
// import ReactApplication from './ReactApplication';

import { createRoot } from 'react-dom/client';



// const container = document.getElementById('root')

// render(
//   <React.StrictMode>
//     <ReactApplication/>
//   </React.StrictMode>, container)

import('./bootstrap').then(({FrameworkHeroReact}) => {
  const localRoot = document.getElementById('react-app-local');
  const root = createRoot(localRoot!);
  root.render(<FrameworkHeroReact/>)
})
//  .then(({mount}) => {
//   const localRoot = document.getElementById('react-app-local');

//   mount({
//     mountPoint: localRoot!,
//     routingStrategy: 'browser'
//   })
// })


export {}