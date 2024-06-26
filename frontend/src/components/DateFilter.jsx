import React, { useEffect, useState, useRef } from 'react'
import Datepicker from "tailwind-datepicker-react"
import { format } from 'date-fns'

const options = {
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	clearBtnText: "Clear",
	datepickerClassNames: "top-60",
	defaultDate: new Date(),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	},
	theme: {
		background: "bg-gray-700",
		todayBtn: "bg-gray-700 text-white hover:bg-gray-600",
		clearBtn: "bg-gray-800 text-white hover:bg-gray-600",
		icons: "bg-gray-700 text-white hover:bg-gray-600",
		text: "text-white hover:bg-gray-800",
		// disabledText: "bg-red-500",
		input: "bg-gray-700 text-white",
		inputIcon: "",
		selected: "",
	},
}

const DateFilter = ({ taskList, setTaskList, selectedDate, handleFilterDateChange }) => {
	const [show, setShow] = useState(false)
	const dateFilterRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dateFilterRef.current && !dateFilterRef.current.contains(event.target)) {
				setShow(false)
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	const handleChange = (selectedDate) => {
		const d = format(selectedDate, 'dd/MM/yyyy')
		handleFilterDateChange(d)
		console.log(d)
	}

	const handleClose = () => {
		setShow(false)
	}

	return (
		<div className='flex mt-12 md:mt-16'>
			<div ref={dateFilterRef}>
				<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} className=" border  text-sm rounded-lg   block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
					<div className="relative w-32 md:w-40 ">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
							<svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
							</svg>
						</div>
						<input type="text" className="border text-xs md:text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="filter by date" value={selectedDate} onFocus={() => setShow(true)} readOnly />
					</div>
				</Datepicker>
			</div>
		</div>
	)
}

export default DateFilter