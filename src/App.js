import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() {

let title ="My activities to do for the weak"
  return (
    <div>
      <NavBar title={title} />
      <main>
      <Todo title="learning CSS" datetime="15 August2022" /> 
      <Todo title="learning HTML" datetime="15 August2022" /> 
      <Todo title="learning Javascript" datetime="15 August2022" /> 
      <Todo title="learning Web browser" datetime="15 August2022" /> 
      <Todo title="learning react" datetime="15 August2022" /> 
            

 </main>     
    </div>
  )
}

export default App