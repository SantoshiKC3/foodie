import { useState } from 'react'
import './App.css'
import Footer from './component/footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hi i am footer</h1>
      <Footer/>
    </>
  )
}

export default App
