# React.js API Integration Application

## Overview
This React.js application fetches and displays data from a public API (JSONPlaceholder). Users can search and filter the displayed data, navigate between pages using React Router, and view detailed information about a selected item.

## Features
- Fetches data from JSONPlaceholder API.
- Displays a list of items (posts) in a structured format.
- Implements routing using `react-router-dom`.
- Search and filter functionality for quick access to relevant items.
- Uses `useState` and `useEffect` for state management.
- Styled for a modern and responsive UI.
- Pagination is implemented.

## Technologies Used
- **React.js** (UI framework)
- **React Router** (Client-side routing)
- **JSONPlaceholder API** (Mock data)
- **useState & useEffect** (State management)

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Shradha-2491/reactjs-application.git
   cd reactjs-application
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Deployment
This project has been deployed on Vercel. You can access the live version here:
[Live Demo](https://reactjs-application-zeta.vercel.app/)

## Screenshots

### Home Page
![Image](https://github.com/user-attachments/assets/98fa1bdc-478d-491e-8870-e5c423d8388c)

![Image](https://github.com/user-attachments/assets/03c0f548-c20a-402e-9b39-3af7c1f3a09c)

### Post Detail Page
![Image](https://github.com/user-attachments/assets/cfafe630-a591-44a4-bc91-62566fd3bb30)

![Image](https://github.com/user-attachments/assets/690e1ee7-c62c-4119-8e0d-b90053b5a87e)

## Project Structure
```
root/
|-- src/
|   |-- components/
|   |   |-- Navbar.js
|   |   |-- PostList.js
|   |-- pages/
|   |   |-- Home.js
|   |   |-- PostDetail.js
|   |-- styles/
|   |   |-- Home.css
|   |   |-- App.css
|   |   |-- index.css
|   |   |-- PostDetail.css
|   |   |-- Navbar.css
|   |   |-- PostList.css
|   |-- App.js
|   |-- index.js
|-- public/
|-- package.json
|-- README.md
```
