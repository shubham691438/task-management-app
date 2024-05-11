import React,{useEffect,useState} from 'react'
import Datepicker from 'flowbite-datepicker/Datepicker';
import { Modal } from 'flowbite';

const EditTask = ({task,taskList,setTaskList}) => {
    const [taskName, setTaskName] = useState(task.taskName);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [priority, setPriority] = useState(task.priority);
    const [description, setDescription] = useState(task.description);
    const [modal, setModal] = useState(null);
    

    useEffect(() => {
        const datepickerEl = document?.getElementById("dueDate");
        // console.log(datepickerEl);
        new Datepicker(datepickerEl, {});
        }, []);

    useEffect(() => {
         // set the modal menu element
         const targetEl = document.getElementById('edit-modal-'+task._id);
  
         // options with default values
         const options = {
         placement: 'center',
         backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
         onHide: () => {
             console.log('modal is hidden');
         },
         onShow: () => {
             console.log('modal is shown');
         },
         onToggle: () => {
             console.log('modal has been toggled');
         }
         };

         let modal = new Modal(targetEl, options);
         setModal(modal);
        
    },[]);    
    
    
    const HandleEdit = async (e) => {
       
        e.preventDefault();
        const name = taskName;
        const dueDate = dueDate;
        const priority = priority;
        const description = description;
        console.log(name,dueDate,priority,description);
        //reset to de
        e.target.reset();
        const updatedTask = {
            taskName: name,
            dueDate: dueDate,
            priority: priority,
            description: description
        };
        try {
            const response = await fetch(`/api/task/update/${task.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
            });
            if (response.ok) {
                const updatedTaskList = taskList.map(t => {
                    if (t.id === task.id) {
                        return { ...t, ...updatedTask };
                    }
                    return t;
                });
                setTaskList(updatedTaskList);
            } else {
                console.error('Failed to update task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
   
      return (
        
        <div>
             {/* Modal toggle */}
             <div data-modal-target={"edit-modal-"+task._id}  data-modal-toggle={"edit-modal-"+task._id} onClick={()=>{modal.show()}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
            </div>
    
            
    
            {/* <!-- Main modal --> */}
            <div id={"edit-modal-"+task._id} tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Edit Task
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle={"edit-modal-"+task._id}>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form class="p-4 md:p-5" onSubmit={HandleEdit}>
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                                    <input type="text" value={taskName} onChange={(e)=>{setTaskName(e.target.value)}} name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type task name" required="" />
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label for="dueDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due date</label>
                                    <div class="relative max-w-sm">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                            </svg>
                                        </div>
                                        <input datepicker datepicker-autohide value={dueDate} onChange={(e)=>{setDueDate(e.target.value)}} id="dueDate" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                                    </div>
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                                    <select value={priority} onChange={(e)=>{setPriority(e.target.value)}} id="priority" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select Priority</option>
                                        <option value="high">high</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                                <div class="col-span-2">
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
                                    <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write note about the task here..."></textarea>                    
                                </div>
                            </div>
                            <button data-modal-hide={"edit-modal-"+task._id} type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                 Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
    
        </div>
      )
}

export default EditTask