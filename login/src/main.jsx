import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserLog from './Pages/UserLog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserLog />
  </StrictMode>,
)
