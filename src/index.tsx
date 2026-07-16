import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoot } from './App/AppRoot';

import './index.css'
import { TanstackQueryClientProvider } from './QueryClientProvider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TanstackQueryClientProvider>
            <AppRoot />
        </TanstackQueryClientProvider>
    </StrictMode>
);
