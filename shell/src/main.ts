import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
	loadRemoteEntry({type: 'module', remoteEntry: "http://localhost:5001/assets/remoteEntry.js"})
])
.catch(err => console.error("Failed to load remote entries", err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err))

