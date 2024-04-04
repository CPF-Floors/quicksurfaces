import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'

import './scss/index.scss'

import LoadScreen from './components/LoadScreen'
const App = lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<LoadScreen />}>
    <App />
  </Suspense>
)
