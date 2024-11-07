import { tasks, taskStats } from "../../constants";

const TaskListCards = ({loggedInUserData}) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-3 px-4">
      {taskStats.map((stat) => {
        const taskCount  = tasks.filter((task) => task.status === stat.status && task.assignto === loggedInUserData.id ).length
        return (
          <div
            key={stat.id}
            className={`${stat.background} shadow-md rounded-lg p-4 text-white`}
          >
            <h2 className="text-3xl font-bold mb-2">{taskCount}</h2>
            <h3 className="text-xl font-medium">{stat.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TaskListCards;
