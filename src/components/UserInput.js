import React, { useState, useContext, useRef } from 'react'
import TaskContext from '../context/TaskContext'

import { Link } from "react-router-dom";

const UserInput = () => {

  const {setValue} = useContext(TaskContext)

  const linkRef = useRef(null)

  const [userInput, setUserInput] = useState({})

  const onChange = (e) => {
    setUserInput({...userInput ,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setValue(userInput)
    
    linkRef.current.click()
  }

  return (
    <div>

      <Link to='previewPage' className='hidden' ref={linkRef}> Enter </Link>

      <form onSubmit={handleSubmit}>
        <div className='px-5 flex justify-center mt-10 mb-5 '>
          <div className="border border-solid border-gray-300 block p-10 rounded-lg shadow-lg max-w-2xl sm:w-7/12 ">

            <div className='grid grid-cols-4 gap-4 gap-y-6'>

              <div className="col-span-6 sm:col-start-1 sm:col-end-6 ">
                  <label className='form-label text-gray-700 text-base font-medium'> Location </label>
                  
                  <input type="text" className='block w-full px-3 py-1.5 border border-gray-300
                      rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                      focus:outline-cyan-500' name="location" onChange={onChange} />
              </div>

              <div className="col-span-6 sm:col-start-1 sm:col-end-6 ">
                  <label className='form-label text-gray-700 text-base font-medium'> Complied By: </label>
                  
                  <input type="text" className='block w-full px-3 py-1.5 border border-gray-300
                      rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                      focus:outline-cyan-500' name="compliedBy" onChange={onChange}/>
              </div>

              <div className="col-span-6 sm:col-start-1 sm:col-end-6 ">
                  <label className='form-label text-gray-700 text-base font-medium'> Monitoring period: </label>
                  
                  <input type="datetime-local" className='block w-full px-3 py-1.5 border border-gray-300
                      rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                      focus:outline-cyan-500' name="monitoringPeriod" onChange={onChange}/>
              </div>

              <div className="col-span-6 sm:col-start-1 sm:col-end-6 ">
                  <label className='form-label text-gray-700 text-base font-medium'> Complied On: </label>
                  
                  <input type="date" className='block w-full px-3 py-1.5 border border-gray-300
                      rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 
                      focus:outline-cyan-500' name="compliedOn" onChange={onChange}/>
              </div>
              
            </div>
          
            <div className='flex justify-center mt-7'>
              <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
                  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
                  active:shadow-lg transition duration-150 ease-in-out" > Submit </button>
            </div>
            
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserInput