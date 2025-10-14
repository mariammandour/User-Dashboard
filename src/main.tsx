import { AppRouter } from "./routers/AppRouter";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
    <div>hello</div>
  </StrictMode>,
)
