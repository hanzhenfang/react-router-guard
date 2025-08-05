import { BrowserRouter, Route } from 'react-router'
import RouterGuard from './pages/router-guard/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterGuard />
      </BrowserRouter>
    </>
  )
}

export default App
