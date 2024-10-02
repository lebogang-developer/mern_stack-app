import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkFrontendApi = import.meta.env.VITE_CLERK_FRONTEND_API;

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <ChakraProvider>
          <ClerkProvider frontendApi={clerkFrontendApi}>
            <App />
          </ClerkProvider>
        </ChakraProvider>
      </BrowserRouter>
  </StrictMode>
);
