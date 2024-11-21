import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ListContext } from "./ListProvider";

import { FaPenToSquare } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ListEmp = () => {
  const { employeeList, setEmployeeList } = useContext(ListContext);
  return (
    <div className="container mx-auto px-4">
      <div className="my-5">
        <h1 className="text-center text-3xl mb-5 font-bold text-gray-700 dark:text-gray-300">
          Employee List
        </h1>
        <div className="border border-gray-300 rounded-lg shadow-lg">
          {/* Add Employee Button */}
          <div className="border-b border-gray-300 p-4 bg-gray-100 rounded-t-lg">
            <NavLink
              to={"/add"}
              className="bg-blue-600 text-white py-1 px-4 rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
            >
              Add Employee
            </NavLink>
          </div>

          {/* Employee Table */}
          <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-600">
              <thead className="text-xs uppercase bg-gray-100 text-gray-600">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    SL No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Designation
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Performance
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {employeeList?.map((list, index) => (
                  <tr key={index}>
                    <td className="px-6 py-3">{index + 1}</td>
                    <td className="px-6 py-3">{list.employeeName}</td>
                    <td className="px-6 py-3">{list.employeeId}</td>
                    <td className="px-6 py-3">{list.designation}</td>
                    <td className="px-6 py-3">{list.performance}</td>
                    <td className="px-6 py-3">
                      <div className="flex gap-3 items-center">
                        <NavLink to={`edit/${index}`} className="text-blue-600 text-md"><FaPenToSquare /></NavLink>
                        <NavLink to={`view/${index}`} className="text-green-600 text-lg"><FaEye /></NavLink>
                        <NavLink to={`delete/${index}`} className="text-red-600 text-md"><FaTrash /></NavLink>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmp;
