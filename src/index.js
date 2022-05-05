import { createRoot } from 'react-dom/client';
import { HeadProvider } from 'react-head';
import App from './routes/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <HeadProvider>
    <App tab="/" />
  </HeadProvider>,
);
