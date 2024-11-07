import React from 'react'
import Header from '../other/Header'
import TaskListCards from '../tasklist/TaskListCards'
import TaskList from '../tasklist/TaskList'

const EmployeeDashboard = ({loggedInUserData}) => {
  return (
    <div className='container mx-auto px-3 bg-[#1c1c1c] h-screen'>
      <Header loggedInUserData={loggedInUserData} />
      <TaskListCards loggedInUserData={loggedInUserData}/>
      <TaskList loggedInUserData={loggedInUserData}/>
    </div>
  )
}

export default EmployeeDashboard