import { useState } from 'react'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Formulario />
      </div>
    </>
  )
}

export default App
