const Header = ({loggedInUserData}) => {
  console.log(loggedInUserData)
    return (
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-col text-white">
          <span className="capitalize text-lg">hello</span>
          <h1 className="text-3xl font-bold capitalize">{loggedInUserData && loggedInUserData.name} 👋</h1>
        </div>
        <button className="bg-red-500 text-white text-sm px-3 py-1 rounded-md capitalize transition-colors duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
          log out
        </button>
      </div>
    );
  };
  
export default Header;  