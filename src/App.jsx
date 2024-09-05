import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import TodoList from './component/TodoList'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className='bg-slate-300 py-4 min-h-screen' >
      <ToastContainer/>
      <Navbar/>
      <TodoList/>
    </div>
  )
}

export default App
