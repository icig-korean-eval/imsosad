#!/bin/bash

# Create React application with necessary dependencies
npm install react react-dom @types/react @types/react-dom typescript web-vitals
npm install -D tailwindcss postcss autoprefixer @types/node
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event

# Initialize Tailwind CSS
npx tailwindcss init -p
