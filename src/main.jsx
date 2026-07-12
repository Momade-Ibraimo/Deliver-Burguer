import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Globalstyles from './Global-Styles/globalstyles'
import AppProvider from './hooks'
import router from './routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    <ToastContainer autoClose={3000} theme="colored" />
    <Globalstyles />
  </StrictMode>
)
