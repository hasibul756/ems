import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [employeeList, setEmployeeList] = useState([]);
  return (
    <ListContext.Provider value={{ employeeList, setEmployeeList }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
