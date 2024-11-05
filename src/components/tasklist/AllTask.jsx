import { tasks } from "../../constants";

const TaskList = () => {

  return (
    <div className="bg-[#1c1c1c] p-6 mt-5 rounded-lg">
      {tasks.map((task) => (
        <div
          key={task.taskid}
          className={`p-4 flex flex-col md:flex-row justify-between items-start md:items-center rounded-lg mb-4 
            ${task.status === 'completed' ? 'bg-green-500' : task.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'}
          `}
        >
          <div className="text-lg font-semibold">{task.assignto}</div>
          <div className="text-md">{task.tasktitle}</div>
          <div className={`text-sm font-medium px-2 py-1 rounded ${task.status === 'completed' ? 'bg-green-700' : task.status === 'pending' ? 'bg-yellow-700' : 'bg-red-700'}`}>
            {task.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;