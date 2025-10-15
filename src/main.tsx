import { AppRouter } from "./routers/AppRouter";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// redux
import { Provider } from "react-redux";
import store from "@store/store";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <AppRouter />
    </StrictMode>,
  </Provider>

)
