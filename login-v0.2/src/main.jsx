import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Res from './Res'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Res />
  </StrictMode>,
)
