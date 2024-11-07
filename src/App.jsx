import { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";

const App = () => {
  setLocalStorage()
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser.role);
        // Retrieve and set the logged-in user data from localStorage
        const storedUserData = localStorage.getItem("loggedInUserData");
        if (storedUserData) {
          setLoggedInUserData(JSON.parse(storedUserData));
        }
      }
      setLoading(false);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (authData) {
      const adminCheck = authData.admins.find(
        (admin) => email === admin.email && password === admin.password
      );

      const employeeCheck = authData.employees.find(
        (employee) => email === employee.email && password === employee.password
      );

      if (adminCheck) {
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        localStorage.setItem("loggedInUserData", JSON.stringify(adminCheck)); // Store admin data
        setLoggedInUserData(adminCheck);
      } else if (employeeCheck) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
        localStorage.setItem("loggedInUserData", JSON.stringify(employeeCheck)); // Store employee data
        setLoggedInUserData(employeeCheck);
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Authentication data is not available.");
    }
  };

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDashboard loggedInUserData={loggedInUserData} />
      )}
      {user === "employee" && (
        <EmployeeDashboard loggedInUserData={loggedInUserData} />
      )}
    </>
  );
};

export default App;
