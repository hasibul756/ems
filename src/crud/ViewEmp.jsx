// ViewEmp.jsx
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListContext } from "./ListProvider";

const ViewEmp = () => {
  // Retrieve the empId from the route parameters
  const { empId } = useParams();

  // Access employeeList from context
  const { employeeList } = useContext(ListContext);

  // Find the employee with a matching index
  const employeeData = employeeList ? employeeList[Number(empId)] : null;

  return (
    <div>
      <h1>Employee Details</h1>
      {employeeData ? (
        <>
          <p>Serial Number: {Number(empId) + 1}</p>
          <p>Name: {employeeData.employeeName}</p>
          <p>Employee ID: {employeeData.employeeId}</p>
          <p>Designation: {employeeData.designation}</p>
          <p>Performance: {employeeData.performance}</p>
        </>
      ) : (
        <p>Employee not found.</p>
      )}
    </div>
  );
};

export default ViewEmp;
