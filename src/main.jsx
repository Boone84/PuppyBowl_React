// vite-project/src/main.jsx
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(<App />);
