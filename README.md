# StudyMate - Online Group-Study Assignment Platform

A web application designed to facilitate group study sessions by enabling users to create, complete, and grade assignments collaboratively.

---

## 🚀 **Purpose**

This project aims to provide an interactive platform where users can:

- Create assignments for their peers.
- Submit and review assignments.
- Grade assignments and provide feedback.
- Engage in a user-friendly and visually appealing group study environment.

The application emphasizes secure, responsive, and functional design to meet modern web application standards.

---

## 🌐 **Live URL**

[View the Live Application](https://ph-a11-group-study-client.vercel.app/)

---

## 🎯 **Key Features**

### General Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Theme Toggle**: Switch between light and dark modes seamlessly.
- **Authentication**: Email/password-based login and Google login support.
- **Secure Credentials**: Firebase and MongoDB credentials secured using environment variables.

### Pages and Functionality

1. **Home Page** (Public)

   - Banner showcasing the application's theme.
   - Feature highlights for users.
   - FAQ section to address common queries.

2. **Authentication**

   - Login/Registration pages with real-time validation.
   - Password requirements: At least one uppercase, one lowercase letter, and a minimum of 6 characters.
   - SweetAlerts/Toasts for success or error notifications.

3. **Assignments Management**

   - **Create Assignment**: Logged-in users can create assignments with fields for title, description, marks, difficulty level, and due date.
   - **View Assignments**: List of all assignments with options to filter/search by difficulty level and title.
   - **Update/Delete Assignment**: Users can update/delete their assignments, with validations and confirmation modals.
   - **Dynamic Assignment View**: Detailed assignment page for individual assignments.

4. **Submission Management**

   - Submit assignments with Google Docs links and notes.
   - Track submissions with "My Attempted Assignments" page.
   - View pending assignments submitted by others, excluding your own.

5. **Grading**

   - Grade assignments submitted by others.
   - Input fields for marks and feedback during grading.
   - Automatically update the assignment status to "Completed" after grading.

---

## 🛠️ **Technologies Used**

### Frontend

- **React.js**: For building the user interface.
- **Tailwind CSS**: For responsive and eye-catching design.
- **React DatePicker**: For date selection in assignment creation.
- **Lucide Icons**: For modern and consistent iconography.
- **React Query**: For data fetching and state management.
- **SweetAlert2/React-Toastify**: For user notifications.

### Backend

- **Node.js**: Server runtime.
- **Express.js**: Backend framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing assignments and user data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: For authentication and protecting private routes.

### Deployment

- **Vercel**: For hosting both the frontend and the backend.

---
