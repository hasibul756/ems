import { employees, admins } from "../constants";

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admins", JSON.stringify(admins));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admins = JSON.parse(localStorage.getItem("admins"));
  return { employees, admins };
};