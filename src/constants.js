// Employee Data
export const employees = [
  {
    id: 1,
    name: "rajan kumar",
    email: "emp1@me.com",
    password: "123",
    role: "employee",
    status: "active",
  },
  {
    id: 2,
    name: "anita patel",
    email: "emp2@me.com",
    password: "123",
    role: "employee",
    status: "active",
  },
  {
    id: 3,
    name: "vikram singh",
    email: "emp3@me.com",
    password: "123",
    role: "employee",
    status: "active",
  },
  {
    id: 4,
    name: "priya sharma",
    email: "emp4@me.com",
    password: "123",
    role: "employee",
    status: "active",
  },
  {
    id: 5,
    name: "rahul deshmukh",
    email: "emp5@me.com",
    password: "123",
    role: "employee",
    status: "active",
  },
];

// Admin Data
export const admins = [
  {
    id: 6,
    name: "admin user",
    email: "admin1@me.com",
    password: "123",
    role: "admin",
  },
  {
    id: 7,
    name: "admin user 2",
    email: "admin2@me.com",
    password: "123",
    role: "admin",
  },
];

// Task Data
export const tasks = [
  {
    taskid: 1,
    tasktitle: "design homepage",
    description: "create a responsive homepage design with tailwind css.",
    dateAssigned: "2024-10-30",
    duedate: "2024-11-05",
    assignto: 1,
    category: "design",
    status: "pending",
    priority: "high",
  },
  {
    taskid: 2,
    tasktitle: "api development",
    description:
      "develop restful apis for the user module using node.js and express.",
    dateAssigned: "2024-10-29",
    duedate: "2024-11-10",
    assignto: 2,
    category: "backend",
    status: "in progress",
    priority: "medium",
  },
  {
    taskid: 3,
    tasktitle: "enhance dashboard ui",
    description:
      "improve the ui/ux of the dashboard with updated color schemes and animations.",
    dateAssigned: "2024-10-31",
    duedate: "2024-11-12",
    assignto: 3,
    category: "frontend",
    status: "pending",
    priority: "low",
  },
  {
    taskid: 4,
    tasktitle: "run functional tests",
    description:
      "perform functional tests on the application to ensure all modules work as expected.",
    dateAssigned: "2024-10-28",
    duedate: "2024-11-15",
    assignto: 4,
    category: "quality assurance",
    status: "pending",
    priority: "high",
  },
  {
    taskid: 5,
    tasktitle: "create social media content",
    description:
      "design and schedule posts for the product launch campaign across social platforms.",
    dateAssigned: "2024-10-30",
    duedate: "2024-11-20",
    assignto: 5,
    category: "marketing",
    status: "completed",
    priority: "medium",
  },
];

// Bg Colors
export const bgColors = [
  { id: 1, status: "pending", background: "bg-red-500" },
  { id: 2, status: "in progress", background: "bg-blue-500" },
  { id: 3, status: "completed", background: "bg-green-500" },
];

// Task Stats
export const taskStats = [
  {
    id: 1,
    title: "Pending Tasks",
    status: "pending",
    background: "bg-blue-600",
  },
  {
    id: 2,
    title: "In Progress Tasks",
    status: "in progress",
    background: "bg-yellow-500",
  },
  {
    id: 3,
    title: "Completed Tasks",
    status: "completed",
    background: "bg-green-500",
  },
];
