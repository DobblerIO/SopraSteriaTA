import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoot } from './App/AppRoot';

import './index.css'
import { TanstackQueryClientProvider } from './QueryClientProvider';
import { ErrorBoundary } from './App/components/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary fallback={"Oops something went wrong"} >
            <TanstackQueryClientProvider>
                <AppRoot />
            </TanstackQueryClientProvider>
        </ErrorBoundary>
    </StrictMode>
);
