# City Info Project

## Overview

City Info is a full-stack web application that provides details about various cities, including population, landmarks, and geographical coordinates. It features a React-based frontend with Redux for state management and a NestJS backend for handling API requests.

## Features

- Interactive map with city markers
- Detailed city information including population and landmarks
- Search and filter functionality
- Modern UI with responsive design
- Real-time updates with hot module replacement

## Tech Stack

- **Frontend:** React, Vite, Redux Toolkit, React Router, @vis.gl/react-google-maps
- **Backend:** NestJS, TypeScript
- **Build & Development Tools:** TurboRepo, Jest for testing, Babel, ESLint, Prettier

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (LTS recommended)
- npm
- Git

## Setup Instructions

1. **Clone the Repository**

   ```sh
   git clone <repository-url>
   cd city-info
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**

   - Rename `.env_sample` to `.env` in the root directory.
   - Open `.env` and add your Google Maps API key:

     ```sh
     VITE_GOOGLE_MAPS_API_KEY=<YOUR_GOOGLE_API_KEY>
     ```

4. **Run the Application**

   - **Start both Frontend & Backend simultaneously:**

     ```sh
     npm run dev
     ```

   - **Start only the Backend:**

     ```sh
     npm run dev:api
     ```

   - **Start only the Frontend:**

     ```sh
     npm run dev:client
     ```

## Available Scripts

- **`npm run dev`** – Runs both the frontend and backend in parallel with live reload.
- **`npm run dev:api`** – Starts the NestJS backend in watch mode for real-time updates.
- **`npm run dev:client`** – Starts the React frontend using Vite with hot module replacement.
- **`npm run build`** – Builds the project for production.
- **`npm run test`** – Runs the test suite.
- **`npm run lint`** – Runs ESLint and auto-fixes issues.

## Testing

To run all tests:

```sh
npm run test
```

## Contribution

Feel free to open issues or submit pull requests to contribute to the project.

## License

[MIT License](LICENSE)
