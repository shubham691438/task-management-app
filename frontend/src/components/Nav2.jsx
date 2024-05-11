import React from 'react'

const Nav2 = () => {
return (
    
    <div className='mt-5'>
            <nav class=" border-gray-200 bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
                            <li>
                            <span class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0  md:text-blue-500" aria-current="page">All</span>
                            </li>
                            <li>
                            <span class="block py-2 px-3 rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Completed</span>
                            </li>
                            <li>
                            <span class="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">High Priority</span>
                            </li>
                            <li>
                            <span class="block py-2 px-3  rounded   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Medium Priority</span>
                            </li>
                            <li>
                            <span class="block py-2 px-3 rounded   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Low Priority</span>
                            </li>
                    </ul>
                    </div>
            </div>
            </nav>
    </div>
)
}

export default Nav2