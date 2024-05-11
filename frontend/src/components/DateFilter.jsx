import React,{useEffect,useState} from 'react'
import Datepicker from 'flowbite-datepicker/Datepicker';

const DateFilter = ({taskList, setTaskList}) => {

    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const datepickerEl = document?.getElementById("datepicker");
        // console.log(datepickerEl);
        new Datepicker(datepickerEl, {"format": 'dd/mm/yyyy'});
    }, [taskList]);

    const handleDateChange = (event) => {

        console.log(event.target.value);
        const d = event.target.value;
        setSelectedDate(d);
        // Logic to filter task list based on selected date
        const filteredTasks = taskList.filter(task => task.dueDate === d);
        setTaskList(filteredTasks);
    }

    return (
        <div className='flex mt-24'>
                <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                        </div>
                        <input value={selectedDate} onChange={handleDateChange} id="datepicker" type="text" className=" border text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Select date" />
                </div>
        </div>
    )
}

export default DateFilter