# TeamFlow

## Overview

TeamFlow is a fullstack task management application inspired by tools like Trello.

It includes a secure backend API and a React frontend, supporting multi-user workflows with proper data isolation.

---

## Features

### Authentication

* User registration & login
* JWT-based authentication
* Protected API endpoints

### Core Functionality

* Workspaces
* Boards within workspaces
* Tasks within boards

### Multi-user System

* Each user only sees their own data
* Secure data isolation across all entities

### Frontend

* React + TypeScript (Vite)
* Routing with React Router
* API integration with Axios
* Loading states & empty states
* Protected routes

---

## Tech Stack

### Backend

* ASP.NET Core Web API
* Entity Framework Core
* SQL Server (LocalDB)
* JWT Authentication

### Frontend

* React (Vite)
* TypeScript
* Axios
* React Router

---

## Project Structure

```
TeamFlow/
├── TeamFlow.API/
├── TeamFlow.Application/
├── TeamFlow.Domain/
├── TeamFlow.Infrastructure/
├── frontend/
```

---

## Run the Project

### Backend

```bash
dotnet run --project TeamFlow.API
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Example Flow

1. Register a user
2. Login → receive JWT token
3. Create a workspace
4. Create boards inside workspace
5. Create tasks inside boards

---

## Screenshots

*Add screenshots of:*

* Login page

  <img width="407" height="144" alt="image" src="https://github.com/user-attachments/assets/5ab570ad-01b4-4eed-a8df-491e0fa11643" />

* Dashboard (workspaces)

  <img width="248" height="263" alt="image" src="https://github.com/user-attachments/assets/e45d454e-e640-4deb-8c81-c76416caf34c" />

* Boards view

<img width="225" height="141" alt="image" src="https://github.com/user-attachments/assets/b6344d1b-1f22-45f2-86e9-4827cbfe941f" />
  
* Tasks view

<img width="234" height="143" alt="image" src="https://github.com/user-attachments/assets/1e1042d3-5017-4cbf-bdc5-cdd7a33ba536" />

---

## Future Improvements

* Drag & drop tasks (Kanban)
* Assign users to tasks
* Due dates & priorities
* UI improvements (Tailwind)
* Deployment (Azure / Docker)

---

## Purpose

This project was built to strengthen skills in:

* Fullstack development
* API design
* Authentication & security
* React + backend integration
