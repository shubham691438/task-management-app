import React,{useEffect} from 'react'
import Datepicker from 'flowbite-datepicker/Datepicker';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const AddTask = ({taskList,setTaskList}) => {

useEffect(() => {
    const datepickerEl = document?.getElementById("dueDate");
    // console.log(datepickerEl);
    new Datepicker(datepickerEl, {"format": 'dd/mm/yyyy',"autohide":true});
    }, []);

const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const dueDate = e.target.dueDate.value;
    const priority = e.target.priority.value;
    const description = e.target.description.value;
    console.log(name,dueDate,priority,description);
    //reset 
    e.target.reset();

    try {
        const response = await fetch(backendUrl+'/api/task/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ taskName:name, dueDate, priority, description })
        });

        if (response.ok) {
            const data = await response.json();
            alert('Task added successfully');
            setTaskList([{ taskName: name, dueDate: dueDate, description: description, priority: priority }, ...taskList]);
           
        } else {
            console.log('Error:', response.statusText);
            alert('Failed to add task')
        }
    } catch (error) {
        console.log('Error:', error);
    }
}
  return (
    <div>
         {/* Modal toggle */}
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className='flex justify-center md:min-w-40 items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-1.5 py-1 md:px-4 md:py-2'>
            <span >Add Task</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>

        

        {/* <!-- Main modal --> */}
        <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Create New Task
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type task name" required=""/>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due date</label>
                                <div className="relative max-w-sm">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                        </svg>
                                    </div>
                                    <input  id="dueDate" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                                <select id="priority" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option defaultValue="">Select Priority</option>
                                    <option value="high">high</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
                                <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write note about the task here..."></textarea>                    
                            </div>
                        </div>
                        <button data-modal-hide="crud-modal" type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </div> 

    </div>
  )
}

export default AddTask