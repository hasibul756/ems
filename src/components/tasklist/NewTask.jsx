import React, { useState } from "react";
import { employees } from "../../constants";

const NewTask = () => {
  const initialData = {
    taskTitle: "",
    description: "",
    dateAssigned: "",
    dueDate: "",
    assignTo: "",
    category: "",
    priority: "medium",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData(initialData);
  };

  const styles = {
    formContainer: "px-6 py-4",
    title: "text-2xl font-semibold mb-6 text-white",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    label: "block text-sm font-medium text-white mb-2",
    input:
      "w-full px-3 py-2 border border-emerald-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-800 text-white placeholder-gray-400",
    select:
      "w-full px-3 py-2 border border-emerald-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-800 text-white placeholder-gray-400",
    button:
      "mt-6 py-2 px-6 text-white rounded-lg border border-emerald-500 hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition",
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.title}>Create New Task</h2>

      <div className={styles.grid}>
        <div className="mb-1">
          <label htmlFor="task-title" className={styles.label}>
            Task Title
          </label>
          <input
            type="text"
            id="task-title"
            name="taskTitle"
            value={formData.taskTitle}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter task title"
          />
        </div>

        <div className="mb-1">
          <label htmlFor="dateAssigned" className={styles.label}>
            Date Assigned
          </label>
          <input
            type="date"
            id="dateAssigned"
            name="dateAssigned"
            value={formData.dateAssigned}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className="mb-1">
          <label htmlFor="dueDate" className={styles.label}>
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className="mb-1">
          <label htmlFor="assignTo" className={styles.label}>
            Assign To
          </label>
          <select
            id="assignTo"
            name="assignTo"
            value={formData.assignTo}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select to Assign</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-1">
          <label htmlFor="category" className={styles.label}>
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter category"
          />
        </div>

        <div className="mb-1">
          <label htmlFor="priority" className={styles.label}>
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-1">
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter description"
            rows="4"
          />
        </div>
      </div>

      <button type="submit" className={styles.button}>
        Create Task
      </button>
    </form>
  );
};

export default NewTask;
