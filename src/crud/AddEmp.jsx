import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "./ListProvider";

const style = {
  input: "border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-400 transition",
  label: "block font-medium text-gray-700 mb-1",
  formContainer: "border border-gray-200 shadow-lg rounded-lg p-6 bg-white",
  formTitle: "text-center text-3xl mb-8 font-bold text-gray-700",
  submitButton: "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mt-4 w-full sm:w-auto",
  select: "border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-400 transition bg-white",
};

const AddEmp = () => {
  const initialValue = {
    employeeName: "",
    employeeId: "",
    department: "",
    designation: "",
    performance: "",
  };

  const [formData, setFormData] = useState(initialValue);

  const {employeeList, setEmployeeList} = useContext(ListContext);

  useEffect(() => {
    console.log("Updated employeeList:", employeeList);
  }, [employeeList]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployeeList((prevList) => [...prevList, formData]);
    setFormData(initialValue);
  };

  return (
    <div className="container mx-auto px-3">
      <div className="my-10">
        <h1 className={style.formTitle}>Add Employee</h1>
        <form className={style.formContainer} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Employee Name Field */}
            <div>
              <label className={style.label} htmlFor="employeeName">
                Employee Name:
              </label>
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                id="employeeName"
                placeholder="Enter employee name"
                className={style.input}
                onChange={handleChange}
              />
            </div>

            {/* Employee ID Field */}
            <div>
              <label className={style.label} htmlFor="employeeId">
                Employee ID:
              </label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                id="employeeId"
                placeholder="Enter employee ID"
                className={style.input}
                onChange={handleChange}
              />
            </div>

            {/* Department Field */}
            <div>
              <label className={style.label} htmlFor="department">
                Department:
              </label>
              <input
                type="text"
                name="department"
                id="department"
                value={formData.department}
                placeholder="Enter department"
                className={style.input}
                onChange={handleChange}
              />
            </div>

            {/* Designation Field */}
            <div>
              <label className={style.label} htmlFor="designation">
                Designation:
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                id="designation"
                placeholder="Enter designation"
                className={style.input}
                onChange={handleChange}
              />
            </div>

            {/* Performance Dropdown */}
            <div>
              <label className={style.label} htmlFor="performance">
                Performance:
              </label>
              <select
                name="performance"
                id="performance"
                value={formData.performance}
                className={style.select}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select performance
                </option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
              </select>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button type="submit" className={style.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmp;