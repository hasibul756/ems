import { tasks } from "../../constants";

const TaskList = ({ loggedInUserData }) => {
  const styles = {
    container:
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-6",
    card: "p-5 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105",
    priorityTag:
      "px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wide",
    dateText: "text-xs font-semibold text-gray-700",
    title: "text-lg font-semibold text-gray-800 mb-3",
    description: "text-sm text-gray-700 leading-relaxed",
    button:
      "px-4 py-1 text-sm font-semibold text-white rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
    buttonStatus: {
      pending: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300",
      inProgress: "bg-green-500 hover:bg-green-600 focus:ring-green-300",
      completed: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-300",
    },
  };

  const getButtonLabel = (status) => {
    switch (status) {
      case "pending":
        return "Start Task";
      case "in progress":
        return "Mark as Complete";
      case "completed":
        return "Completed";
      default:
        return "";
    }
  };

  const getButtonClass = (status) => {
    return styles.buttonStatus[status] || styles.buttonStatus.pending; // default to pending
  };

  return (
    <div id="tasklist" className={styles.container}>
      {tasks
        .filter((task) => task.assignto === loggedInUserData.id)
        .map((task) => (
          <div key={task.taskid} className={styles.card}>
            <div className="flex justify-between items-center mb-4">
              <span
                className={`${styles.priorityTag} ${
                  task.priority === "high"
                    ? "bg-red-500"
                    : task.priority === "medium"
                    ? "bg-yellow-600"
                    : "bg-green-500"
                }`}
              >
                {task.priority}
              </span>
              <span className={styles.dateText}>{task.duedate}</span>
            </div>
            <h2 className={styles.title}>{task.tasktitle}</h2>
            <p className={styles.description}>{task.description}</p>
            <div className="flex items-center mt-3 justify-between">
                <span className="capitalize">Status: {task.status}</span>
              <button
                className={`${styles.button} ${getButtonClass(task.status)}`}
              >
                {getButtonLabel(task.status)}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;