## Author

- **Name:** Putra Utama Jaya
- **LinkedIn:** [https://www.linkedin.com/in/putra-utama-jaya/](https://www.linkedin.com/in/putra-utama-jaya/)

# GitHub Repositories Explorer

## Description

Create a React application integrating with the GitHub API. Users can search for up to **5 GitHub users** whose usernames match a given input. Upon selecting a user, the application displays all repositories for that user without limit.

- **API documentation:** [GitHub REST API v3](https://developer.github.com/v3/)

## Features

- Search for GitHub users by username.
- Display up to 5 matching users.
- View all repositories for a selected user.

## Technologies & Dependencies

- **Framework & Libraries:**
  - React ^19.0.0
  - React Router DOM ^7.5.0
  - Zustand ^5.0.3 (state management)
- **UI & Styling:**
  - Mantine (core & hooks) ^8.1.2
  - Tabler Icons React ^3.34.0
  - Tailwind CSS ^4.1.4
  - @tailwindcss/vite ^4.1.4
- **Data & HTTP:**
  - Axios ^1.8.4

## Setup & Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd github-repos-explorer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173/` (or the port shown in the console).

## Usage

1. Enter a GitHub username or keyword in the search input.
2. The app shows up to 5 users with matching usernames.
3. Click a user to load and display all of their repositories.
4. Browse repositories; use sorting or searching within the list if implemented.

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route components (Home, UserDetails)
├── store/            # Zustand stores for state management
└── App.tsx           # Main Application
```

## API Integration

- **Search Users:** `GET https://api.github.com/search/users?q={query}&per_page=5`
- **List Repos:** `GET https://api.github.com/users/{username}/repos`

---

_Happy coding!_
