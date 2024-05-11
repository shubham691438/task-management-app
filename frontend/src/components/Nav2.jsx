import React from 'react'

const Nav2 = ({isSelectedAll,priorityFilter,completedFilter,handleAllSelect,handleCompletedFilter,handlePriorityFilter}) => {
    console.log("completed filter",completedFilter)
return (
    <div className='mt-5'>
        <nav className="border-gray-200 bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                        <li>
                            <span onClick={handleAllSelect} className={"block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 " + (isSelectedAll ? "text-blue-500" : "text-white-500")} aria-current="page">All</span>
                        </li>
                        <li>
                            <span onClick={handleCompletedFilter} className={"block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 " + (completedFilter==true ? "text-blue-500" : "text-white-500")}>Completed</span>
                        </li>
                        <li>
                            <span onClick={() => { handlePriorityFilter("high") }} className={"block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 " + (priorityFilter==='high' ? "text-blue-500" : "text-white-500")}>High Priority</span>
                        </li>
                        <li>
                            <span onClick={() => { handlePriorityFilter("medium") }} className={"block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 " + (priorityFilter==='medium' ? "text-blue-500" : "text-white-500")}>Medium Priority</span>
                        </li>
                        <li>
                            <span onClick={() => { handlePriorityFilter("low") }} className={"block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 " + (priorityFilter==='low' ? "text-blue-500" : "text-white-500")}>Low Priority</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);
}

export default Nav2