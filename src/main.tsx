import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import { PhaseContextProvider } from './contexts/PhaseContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhaseContextProvider>
      <Home />
    </PhaseContextProvider>
  </StrictMode>,
)
