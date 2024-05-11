import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav2 from './components/Nav2'

import Navbar from './components/Navbar'
import AddTask from './components/AddTask'
import Task from './components/Task'
import DateFilter from './components/DateFilter'
import { format } from 'date-fns'

const backendUrl = import.meta.env.VITE_BACKEND_URL;
function App() {
  
  const [taskList, setTaskList] = useState([]);
  const [selectedDate, setSelectedDate] = useState('')
  const [completedFilter, setCompletedFilter] = useState(false)
  const [priorityFilter, setPriorityFilter] = useState('')
  const [isSelectedAll, setIsSelectedAll] = useState(true)

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

  const handleFilterDateChange = (selectedDate) => {
    setSelectedDate(selectedDate)
  }
  
 

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

  const handleCompletedFilter = () => {
    setCompletedFilter(true)
    setPriorityFilter('')
    setIsSelectedAll(false)
  }
  const handlePriorityFilter = (priority) => {
    setPriorityFilter(priority)
    setCompletedFilter(false)
    setIsSelectedAll(false)
  }

  const handleSelectAll = () => {
    console.log('selected all')
    setIsSelectedAll(true)
    setPriorityFilter('')
    setCompletedFilter(false)
  }


  return (
    <div>
      <Navbar/>
      <DateFilter taskList={taskList} setTaskList={setTaskList} handleFilterDateChange={handleFilterDateChange} selectedDate={selectedDate}/>
      
      <div className='flex mt-5 justify-between '>
          <div className='flex-col'>
            <div className='text-1xl md:text-2xl font-extrabold whitespace-nowrap dark:text-white'>All Task</div>
            <div className='text-sm md:text-xl text-gray-500'>{format(selectedDate || Date.now(),"E ,MMM dd, yyyy")}</div>
          </div>
          <AddTask taskList={taskList} setTaskList={setTaskList}/>
      </div>

      <Nav2 handleAllSelect={handleSelectAll} isSelectedAll={isSelectedAll} priorityFilter={priorityFilter} completedFilter={completedFilter} handleCompletedFilter={handleCompletedFilter} handlePriorityFilter={handlePriorityFilter}/>
      <div className='mt-5'>
        
        {taskList.length > 0 && 
          taskList.filter((task)=>{
            if(selectedDate === ''){
              return task
            }else if(task.dueDate === selectedDate){
              return task
            }
          })
          .filter((task)=>{
            if(completedFilter){
              return task.completed
            }else{
              return task
            }
          })
          .filter((task)=>{
            if(priorityFilter === ''){
              return task
            }else if(task.priority.toLowerCase() === priorityFilter.toLowerCase()){
              return task
            }
          })
          .map((task)=><Task task={task} handleDelete={handleDelete} handleCompleted={handleCompleted} taskList={taskList} setTaskList={setTaskList} key={task._id}/>)
        }

      </div>

      
          
    </div>
  )
}

export default App
