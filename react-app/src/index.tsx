import { createRoot } from 'react-dom/client';

import('./bootstrap').then(({FrameworkHeroReact}) => {
  const localRoot = document.getElementById('react-app-local');
  const root = createRoot(localRoot!);
  root.render(<FrameworkHeroReact/>)
})

export {}