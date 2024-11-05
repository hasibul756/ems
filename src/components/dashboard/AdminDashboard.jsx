import Header from "../other/Header";
import AllTask from "../tasklist/AllTask";
import NewTask from "../tasklist/NewTask";

const AdminDashboard = ({ loggedInUserData }) => {
  return (
    <div className="container mx-auto">
      <Header loggedInUserData={loggedInUserData} />

      <main>
        <NewTask loggedInUserData={loggedInUserData} />
        <AllTask loggedInUserData={loggedInUserData} />
      </main>
    </div>
  );
};

export default AdminDashboard;
