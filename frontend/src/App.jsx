import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import AddTask from './components/AddTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
        <div className='flex mt-24'>
          <div class="relative max-w-sm">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </div>
              <input datepicker type="text" class=" border text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Select date"/>
          </div>
        </div>
        
        <div className='flex mt-5 justify-between '>
            <div className='flex-col'>
              <div className='text-1xl md:text-4xl font-extrabold whitespace-nowrap dark:text-white'>Today 's Task</div>
              <div className='text-gray-500 text-xl'> Monday,4 dec 2024</div>
            </div>
            <AddTask/>
        </div>
          
    </div>
  )
}

export default App
