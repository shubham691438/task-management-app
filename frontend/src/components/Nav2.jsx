import React from 'react'

const Nav2 = ({isSelectedAll,priorityFilter,completedFilter,handleAllSelect,handleCompletedFilter,handlePriorityFilter}) => {
    console.log("completed filter",completedFilter)
return (
    <div className='mt-3 md:mt-5'>
        <nav className="border-gray-200 bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4">
                <div className=" block w-auto overflow-x-auto" id="navbar-default">
                    <ul className="font-medium flex  p-0  rounded-lg flex-row md:space-x-8 rtl:space-x-reverse mt-0 border-0  bg-gray-900 border-gray-700">
                        <li>
                            <span onClick={handleAllSelect} className={"block py-2 px-3 bg-blue-700 rounded bg-transparent p-0 " + (isSelectedAll ? "text-blue-500" : "text-white-500")} aria-current="page">All</span>
                        </li>
                        <li>
                            <span onClick={handleCompletedFilter} className={"block py-2 px-3 bg-blue-700 rounded bg-transparent p-0 " + (completedFilter==true ? "text-blue-500" : "text-white-500")}>Completed</span>
                        </li>
                        <li>
                            <span onClick={() => { handlePriorityFilter("high") }} className={" whitespace-nowrap block py-2 px-3 bg-blue-700 rounded bg-transparent p-0 " + (priorityFilter==='high' ? "text-blue-500" : "text-white-500")}>High Priority</span>
                        </li>
                        <li>
                            <span onClick={() => { handlePriorityFilter("medium") }} className={"whitespace-nowrap block py-2 px-3 bg-blue-700 rounded bg-transparent p-0 " + (priorityFilter==='medium' ? "text-blue-500" : "text-white-500")}>Medium Priority</span>
                        </li>
                        <li>
                            <span onClick={() => { handlePriorityFilter("low") }} className={"whitespace-nowrap block py-2 px-3 bg-blue-700 rounded bg-transparent p-0 " + (priorityFilter==='low' ? "text-blue-500" : "text-white-500")}>Low Priority</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);
}

export default Nav2