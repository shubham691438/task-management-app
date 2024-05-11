import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import AddTask from './components/AddTask'
import Task from './components/Task'
import DateFilter from './components/DateFilter'

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
    try {
      await fetch(backendUrl + '/api/task/update/' + _id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: true })
      });
      const updatedTaskList = taskList.map(task => {
        if (task._id === _id) {
          return { ...task, completed: true };
        }
        return task;
      });
      setTaskList(updatedTaskList);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <Navbar/>
      <DateFilter taskList={taskList} setTaskList={setTaskList}/>
      
      <div className='flex mt-5 justify-between '>
          <div className='flex-col'>
            <div className='text-1xl md:text-4xl font-extrabold whitespace-nowrap dark:text-white'>All Task</div>
            <div className='text-gray-500 text-xl'> After 11 May,2024</div>
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
