import { useState } from "react";

const Login = ({ handleLogin }) => {
  const initialData = { email: "", password: "" };
  const [data, setData] = useState(initialData);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setData(initialData);
    handleLogin(data.email, data.password);
  };

  const styles = {
    container: "h-screen container mx-auto flex items-center justify-center",
    formWrapper: "border border-emerald-500 bg-white/10 p-10 md:p-16 rounded-2xl shadow-lg shadow-emerald-500/30",
    form: "flex flex-col items-center gap-6 w-72 md:w-96",
    inputs: "border border-emerald-500 py-3 px-5 text-lg text-white placeholder-gray-400 bg-transparent rounded-full focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-300",
    button: "bg-emerald-500 hover:bg-emerald-600 py-3 px-10 text-lg text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105",
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form onSubmit={submitHandler} className={styles.form}>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleFormData}
            className={styles.inputs}
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleFormData}
            className={styles.inputs}
            placeholder="Enter your password"
            required
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;