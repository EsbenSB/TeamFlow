# TeamFlow API

## Overview

TeamFlow is a task management backend built with ASP.NET Core.

It supports:

* User authentication (JWT)
* Workspaces, Boards, and Tasks
* User-based data isolation
* Clean API responses using DTOs

## Tech Stack

* ASP.NET Core Web API
* Entity Framework Core
* SQL Server (LocalDB)
* JWT Authentication

## Features

* Register & Login
* Secure endpoints with JWT
* Multi-user data isolation
* CRUD for Workspaces, Boards, Tasks

## Run the project

```bash
dotnet run --project TeamFlow.API
```

## Example flow

1. Register user
2. Login → get token
3. Create workspace
4. Create board
5. Create task
