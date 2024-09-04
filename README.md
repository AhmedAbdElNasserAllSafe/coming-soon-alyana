# Template-website Project

This project is a React-based website built with **Vite**, using **Tailwind CSS** for styling, **dark/light mode** implemented via CSS variables, and multi-language support with **i18next**.

### Features

- **Dark/Light Mode**: Theme switching between dark and light modes is handled using CSS variables and Tailwind's utility classes.
- **Language Support**: Support for multiple languages (Arabic and English) with i18next and react-i18next.
- **Form Management**: Uses **Formik** and **Yup** for form handling and validation.
- **React Router**: Client-side routing with **react-router-dom** to manage navigation between pages.
- **Redux Toolkit**: State management using **Redux Toolkit** for predictable and scalable state management across the app.
- **Responsive Design**: Fully responsive layout, optimized for various devices, built using **Tailwind CSS** utilities.
- **Icons**: Uses **React Icons** library for icons.


### Technologies

- **React** (v18.3.1)
- **Vite** (v5.3.1)
- **Tailwind CSS** (v3.4.9)
- **i18next** (v23.12.1)
- **Redux Toolkit** (v9.1.2)
- **Formik/Yup** for form handling and validation
- **React Router** (v6.24.1)

# Getting Started

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)

You can download Node.js from the official [Node.js website](https://nodejs.org/). npm is included with Node.js


### 1. Clone the repository

```bash
git clone https://github.com/AllSafe-Software-House/react-template-website.git
````
This will create a local copy of the project on your machine.

### 2. Go to the directory
````bash
cd react-template-website
````
Ensure you're in the root of the project before continuing.

### 3. Install the dependencies
````bash
npm install
````
This command installs all the necessary dependencies specified in the package.json file.

### 4. Run the project
````bash
npm run dev
````
This will start the development server on http://localhost:5173 where you can view the application in your browser.

### Notes
- By default, the development server runs on http://localhost:5173. If this port is already in use, Vite will suggest the nearest available port.
- Be sure to check the tailwind.config.js and i18n.js files for customization settings.
