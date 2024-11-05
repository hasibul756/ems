import React from 'react'
import Header from '../other/Header'
import TaskListCards from '../other/TaskListCards'
import TaskList from '../other/TaskList'

const EmployeeDashboard = ({loggedInUserData}) => {
  return (
    <div className='container mx-auto px-3 bg-[#1c1c1c] h-screen'>
      <Header />
      <TaskListCards/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard