import React from 'react'
import EditTask from './EditTask'

const Task = ({task,taskList,setTaskList, handleDelete,handleCompleted}) => {
  return (
    <div className="w-full rounded-lg shadow bg-gray-800 border-gray-700 my-5">

        <div className='flex p-5 justify-between'> 
        <div className='flex-col'>
        <div className='text-md md:text-2xl font-bold'>{task.taskName}</div>
        <div className='text-sm md:text-md text-gray-400 font-semibold'>Due Date : {task.dueDate}</div>
        <div className='text-sm md:text-md mt-4 max-w-[600px]'>{task.description}</div>
        <div className='mt-5 flex '>
            <EditTask task={task} taskList={taskList} setTaskList={setTaskList} />
            <div className='ml-2' onClick={()=>{handleDelete(task._id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6 ">
                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                </svg>
            </div>
            {
                !task.completed && (
                    <div className='ml-2 ' onClick={()=>handleCompleted(task._id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#31c48d" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    </div>
                )
            }
            
        </div>
        </div>

            <div className='relative'>
                <div className="text-xs text-center absolute md:w-32 right-0 md:right-3 rounded-full grid select-none items-center whitespace-nowrap bg-indigo-500 py-1.5 px-3 font-sans font-bold  text-white "><span>{task.priority + " Priority"}</span></div>
                <div className='absolute bottom-0 right-0 md:bottom-0 md:right-3'>
                {
                    task.completed  &&
                    (
                        <div>
                            <div className=" md:w-32 text-center right-3 rounded-full grid select-none items-center whitespace-nowrap bg-green-400 py-1.5 px-3 font-sans text-xs font-bold  text-white "><span>Completed</span></div>
                        </div>
                    )

                }    
                </div>
            </div>

        </div>
     
  </div>
  )
}

export default Task