import { tasks } from "../../constants";

const TaskList = () => {

    return (
        <div
            id='tasklist'
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-6'
        >
            {tasks.map((task) => (
                <div
                    key={task.taskid}
                    className="p-5 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    <div className="flex justify-between items-center mb-4">
                        <span
                            className={`px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wide ${
                                task.priority === 'high' ? 'bg-red-500' : task.priority === 'medium' ? 'bg-yellow-600' : 'bg-green-500'
                            }`}
                        >
                            {task.priority}
                        </span>
                        <span className='text-xs font-semibold text-gray-700'>{task.duedate}</span>
                    </div>
                    <h2 className='text-lg font-semibold text-gray-800 mb-3'>{task.tasktitle}</h2>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                        {task.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default TaskList;