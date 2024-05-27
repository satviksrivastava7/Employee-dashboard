// This js file stores the employee data stored locally
// This data will be fetched and rendered in the dashboard

import empImg1 from "./../assets/images/emp1.jpg";
import empImg2 from "./../assets/images/emp.jpg";
import empImg3 from "./../assets/images/emp2.jpg";
import empImg4 from "./../assets/images/emp3.jpg";
import empImg5 from "./../assets/images/emp4.jpg";
import empImg6 from "./../assets/images/emp5.jpg";
import empImg7 from "./../assets/images/emp6.jpg";
import empImg8 from "./../assets/images/emp7.jpg";
import empImg9 from "./../assets/images/emp9.jpg";
import empImg10 from "./../assets/images/emp8.jpg";

const employees = [
  {
    medal: "gold",
    rank: 1,
    name: "Rakesh Sharma",
    designation: "UI/UX Designer",
    hoursWorked: "7(42)",
    rate: "increased",
    change: "1.5 hrs",
    img: empImg8,
  },

  {
    medal: "silver",
    rank: 2,
    name: "Ankita Thakur",
    designation: "HR Recruiter",
    hoursWorked: "7(41)",
    rate: "decreased",
    change: "1.5 hrs",
    img: empImg2,
  },

  {
    medal: "bronze",
    rank: 3,
    name: "Sarah Yadav",
    designation: "Product Manager",
    hoursWorked: "7(40)",
    rate: "increased",
    change: "1.5 hrs",
    img: empImg3,
  },

  {
    medal: "",
    rank: 4,
    name: "Harsha Shivhare",
    designation: "Designer",
    hoursWorked: "7(37)",
    rate: "increased",
    change: "1.5 hrs",
    img: empImg4,
  },

  {
    medal: "",
    rank: 5,
    name: "Vanhi Rai",
    designation: "Video Editor",
    hoursWorked: "7(37)",
    rate: "decreased",
    change: "1.5 hrs",
    img: empImg5,
  },

  {
    medal: "",
    rank: 6,
    name: "Bhanu Sharma",
    designation: "Business Analyst",
    hoursWorked: "7(32)",
    rate: "decreased",
    change: "1.5 hrs",
    img: empImg6,
  },

  {
    medal: "",
    rank: 7,
    name: "Sunil Yadav",
    designation: "Developer",
    hoursWorked: "7(24)",
    rate: "increased",
    change: "1.5 hrs",
    img: empImg1,
  },

  {
    medal: "",
    rank: 8,
    name: "Akash Roy",
    designation: "Business Analyst",
    hoursWorked: "7(21)",
    rate: "decreased",
    change: "1.5 hrs",
    img: empImg7,
  },

  {
    medal: "",
    rank: 9,
    name: "Rohit Soni",
    designation: "Developer",
    hoursWorked: "7(20)",
    rate: "decreased",
    change: "1.5 hrs",
    img: empImg9,
  },

  {
    medal: "",
    rank: 10,
    name: "Suraj Chauhan",
    designation: "Developer",
    hoursWorked: "7(18)",
    rate: "decreased",
    change: "1.5 hrs",
    img: empImg10,
  },
];

export default employees;
