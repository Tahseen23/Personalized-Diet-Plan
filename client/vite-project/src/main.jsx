import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import router from './routes/routes.jsx'
import { store } from './app/store.js'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export const persistor = persistStore(store)

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
