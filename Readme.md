

# Multiple User Base System for Clients and Developers

Frontend: https://reeco-vishalg197.vercel.app/
backend: 
## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Task](#task)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [How to Run](#how-to-run)
- [Contact](#contact)

## Introduction


This project aims to develop a web application that facilitates the registration and onboarding process for both clients (companies) and developers. The system utilizes Node.js for the backend, React for the frontend, and MongoDB for data storage. The application provides secure sign-up APIs, employs JSON Web Tokens (JWT) for authentication, and features an extensive onboarding process for developers.

## Prerequisites

Node.js is installed on your machine.
MongoDB is installed and running.
A Git repository was created for the project.

## Task

Implement a user-friendly web application that allows clients and developers to register, authenticate, and complete the onboarding process. Ensure secure communication, utilize JWT for authentication, and follow best practices for code quality.

## Features
- User Registration:

Clients and developers can register using their email addresses.
- Authentication:
Secure all APIs (except sign-up) using JWT for secure communication.

- Developer Onboarding:
Developers can submit detailed onboarding information, including personal details, skills, professional experiences, and educational experiences.

- Multiple Education and Professional Experiences:
Developers can add multiple education details and professional experiences, associating each with relevant skills.

- Predefined Skill Schema:
A predefined skill schema fetches skills from the backend, associating user skills and professional experiences with it.

- References between Skills and Professional Experiences:
Establish references between users and predefined skills, ensuring each professional experience includes a reference to the skills used.

## Technologies Used

-Backend: Node.js

-Frontend: React

-Database: MongoDB (via Mongoose)

-JSON Web Tokens (JWT)

-bcrypt



### How to Run
- Clone the repository:
```
git clone https://github.com/your-username/your-project.git

```
- Setup Backend:
```
bash
cd backend
npm install
```
- Create a .env file in the backend directory:
```
plaintext
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```
- Run the backend server:
```bash
npm run server
```
- Setup Frontend:
```
bash
cd your-project/frontend
npm install
```
- Run the React development server:
```
bash
npm run start
```
Access the application in your browser:

Frontend: http://localhost:3000
Backend: http://localhost:3001

## Screenshots

### Login

<img width="939" alt="image" src="https://github.com/vishalG197/RemoteEngine/assets/119415070/0171b09c-baf3-48e7-a509-48f5143b8c6f">



### register

<img width="947" alt="image" src="https://github.com/vishalG197/RemoteEngine/assets/119415070/94def3c3-42b7-46a4-8108-c8d2b5392948">



### onBoarding

<img width="956" alt="image" src="https://github.com/vishalG197/RemoteEngine/assets/119415070/7906ab13-61d8-4498-8d76-8f49a3119649">




## Contact

For any questions or assistance, feel free to contact the project owner:

- Name: Vishal Giri
- Email: vishalgiri197@gmail.com
- mobile: 9767176108

Good luck with your  app development!
