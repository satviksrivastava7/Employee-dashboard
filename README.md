## Overview

This is a frontend assignement for the internship program at Koders. This project is the original creation of Satvik Srivastava appyling for the position for frontend developer at koders.This readme.md documents the project structure and the process to run the project locally.

## Table of Contents

[Structure](#projectStructure)
[Documentation](#documentation)
[Installation](#installation)
[Usage](#usage)
[License](#license)

## Project Structure <a name='projectStructure'/>

client/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── assets/
│ │ ├── images/
│ │ │ └── ...
│ │ └── logo/
│ │ └── ...
│ ├── components/
│ │ ├── styles/
│ │ │ ├── navbar.css
│ │ └── navbar.jsx
│ ├── data/
│ │ └── employeeData.js
│ ├── pages/
│ │ ├── dashboard/
│ │ │ ├── components/
│ │ │ │ ├── profileCard.jsx
│ │ │ │ ├── rankingTable.jsx
│ │ │ ├── styles/
│ │ │ │ ├── dashboard.css
│ │ │ │ ├── profileCard.css
│ │ │ │ └── rankingTables.css
│ │ │ └── dashboard.jsx
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ ├── index.css
│ └── ...
├── .gitignore
├── package.json
└── README.md

## Documentation <a name='documentation'/>

#### Navbar

- **File:** `src/components/navbar.jsx`
- **Description:** Provides navigation options and theme switching functionality. Contains the logo, theme toggle button, settings, notifications, and user profile menu.

#### ProfileCard

- **File:** `src/pages/dashboard/components/profileCard.jsx`
- **Description:** Displays the profile of the top-ranked employee, titled "Employee of the Month", including their image, name, and designation.

#### RankingTable

- **File:** `src/pages/dashboard/components/rankingTable.jsx`
- **Description:** Shows a table of employee rankings including their rank, name, designation, hours worked, and changes in performance.

#### Employee Data

- **File:** `src/data/employeeData.js`
- **Description:** Contains mock data of employees used to populate the ranking table and profile card.

#### Dashboard

- **File:** `src/pages/dashboard/dashboard.jsx`
- **Description:** The main page of the application. It displays the current date and time, and includes the RankingTable and ProfileCard components. The layout adjusts for mobile and desktop views.

## Installation <a name='installation'/>

To run the Employee Activity Dashboard locally, follow these steps:

1. Clone the repository:

```console
git clone https://github.com/yourusername/employee-activity-dashboard.git
cd employee-activity-dashboard
```

2. Install dependencies:
   Make sure you have Node.js and npm installed. Then run:

```console
npm install
```

## Usage <a name='usage' />

1. **Run the Application:**
   After cloning the repository and installing dependencies, start the application using:

   ```sh
   npm start
   ```

   The application will be available at `http://localhost:3000`.

2. **Responsive Design:**
   The dashboard is designed to be responsive. On mobile devices, the `ProfileCard` is displayed above the `RankingTable`. On larger screens, the components are displayed side by side.

3. **Theme Switching:**
   The Navbar includes a theme toggle button that allows you to switch between light and dark themes.

Feel free to explore and modify the components and data to fit your needs. If you have any questions or issues, please open an issue on the GitHub repository.

## License <a name='license' />

This project is licensed under the MIT License.
