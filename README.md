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
![Image](https://github.com/user-attachments/assets/8773f3c1-2263-4c37-ac7c-2105d9b72330)

![Image](https://github.com/user-attachments/assets/0666a95a-9349-4cfa-857d-d8bff01718b6)

### Post Detail Page
![Image](https://github.com/user-attachments/assets/563e8e0f-4b94-4d6e-8314-a472afb39eb2)

![Image](https://github.com/user-attachments/assets/ee42e341-1741-42cc-acd8-47a339ffd932)

## Project Structure
```
root/
|-- src/
|   |-- components/
|   |   |-- Navbar.js
|   |   |-- PostCard.js
|   |-- pages/
|   |   |-- Home.js
|   |   |-- PostDetails.js
|   |-- App.js
|   |-- index.js
|-- public/
|-- package.json
|-- README.md
```
## License
This project is open-source and available under the MIT license.
