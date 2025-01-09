import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [type, setType] = useState('password');

  const changeType = () => {
    if(type == 'password'){
      setType('text');
    } else {
      setType('password');
    }
  }

  return (
    <>
      <input type={ (type == 'password') ? 'password' : 'text' }/>

      <button onClick={ changeType } >{ (type == 'password') ? 'Show' : 'Hide' }</button>
    </>
  )
}

export default App
