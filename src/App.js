import React from 'react'
import TodoInput from './components/TodoInput';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='min-h-screen bg-emerald-200'>
      <Navbar/>
      <TodoInput/>
    </div>
  )
}

export default App;

