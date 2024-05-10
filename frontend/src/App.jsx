import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import AddTask from './components/AddTask'
import Task from './components/Task'
import Datepicker from 'flowbite-datepicker/Datepicker';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
function App() {
  
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(backendUrl+'/api/task/get')
        const data = await response.json();
        setTaskList(data.tasks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    const datepickerEl = document?.getElementById("datepicker");
    // console.log(datepickerEl);
    new Datepicker(datepickerEl, {});
  }, []);

  const handleDelete = async (_id) => {
    try {
      await fetch(backendUrl + '/api/task/delete/' + _id, {
        method: 'DELETE'
      });
      const newTaskList = taskList.filter(task => task._id !== _id);
      setTaskList(newTaskList);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCompleted = async (_id) => {
    console.log("clicked completed");
    try {
      const response = await fetch(backendUrl + '/api/task/update/' + _id, {
        method: 'PUT'
      });
      if (response.ok) {
        const newTaskList = taskList.map(task => {
          if (task._id === _id) {
            return { ...task, completed: true }
          }
          return task
        });
        setTaskList(newTaskList);
      } else {
        console.log('Failed to update task');
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <Navbar/>
      <div className='flex mt-24'>
        <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <input datepicker id="datepicker" type="text" className=" border text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Select date"/>
        </div>
      </div>
      
      <div className='flex mt-5 justify-between '>
          <div className='flex-col'>
            <div className='text-1xl md:text-4xl font-extrabold whitespace-nowrap dark:text-white'>Today 's Task</div>
            <div className='text-gray-500 text-xl'> Monday,4 dec 2024</div>
          </div>
          <AddTask taskList={taskList} setTaskList={setTaskList}/>
      </div>


      <div className='mt-5'>
        
        {taskList.length > 0 && 
          taskList.map((task)=><Task task={task} handleDelete={handleDelete} handleCompleted={handleCompleted} taskList={taskList} setTaskList={setTaskList} key={task._id}/>)
        }

      </div>
          
    </div>
  )
}

export default App
