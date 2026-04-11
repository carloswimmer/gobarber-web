# GoBarber Web

<p align="center">
  <strong>Front-end for GoBarber — barbershop scheduling: providers manage agenda, appointments, and profile.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-16-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3.7-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/styled--components-5-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt="styled-components" />
  <img src="https://img.shields.io/badge/React_Router-5-CA4245?style=flat-square&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Create_React_App-3.4-09D3AC?style=flat-square&logo=createreactapp&logoColor=white" alt="Create React App" />
  <img src="https://img.shields.io/badge/License-MIT-326CE5?style=flat-square" alt="License MIT" />
</p>

<p align="center">
  Consumes the GoBarber REST API (default <code>http://localhost:3333</code>).
</p>

---

## Features

- **Authentication** — Sign in, sign up, forgot password, and reset password flows  
- **Provider dashboard** — Calendar with month availability, daily schedule, and next appointment highlight  
- **Profile** — Update name, email, password, and avatar  
- **Session persistence** — JWT stored in `localStorage` with automatic API authorization headers  
- **UX** — Toast notifications, form validation (Yup), and private routes for authenticated areas  

---

## Tech stack

| Area | Libraries |
|------|-----------|
| UI | [React](https://reactjs.org/) 16, [TypeScript](https://www.typescriptlang.org/) |
| Styling | [styled-components](https://styled-components.com/), [polished](https://polished.js.org/) |
| Routing | [react-router-dom](https://reactrouter.com/) v5 |
| HTTP | [axios](https://axios-http.com/) |
| Forms & validation | [@unform](https://unform.dev/), [Yup](https://github.com/jquense/yup) |
| Dates & calendar | [date-fns](https://date-fns.org/), [react-day-picker](https://react-day-picker.js.org/) |
| Animation | [react-spring](https://www.react-spring.dev/) |
| Tooling | [Create React App](https://create-react-app.dev/) (`react-scripts` 3.x) |

---

## Prerequisites

- **Node.js** (LTS recommended; this project targets the CRA 3 / TypeScript 3 era — use a Node version compatible with `react-scripts@3.4.1`, e.g. 12–14 if you hit install issues on newer Node)  
- **GoBarber API** running and reachable (default base URL below)  

---

## Getting started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd gobarber-web
npm install
```

### 2. API base URL

The client is configured to call:

`http://localhost:3333`

That value lives in `src/services/api.ts`. Change `baseURL` there if your backend uses another host or port.

### 3. Run the app

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) with hot reload.

### 4. Build for production

```bash
npm run build
```

Output is written to `build/`.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Dev server (port 3000) |
| `npm run build` | Production build |
| `npm test` | Run tests in watch mode |
| `npm run test:coverage` | Tests once with coverage (pages, components, hooks) |
| `npm run eject` | Eject from CRA (irreversible) |

---

## Project layout (high level)

```
src/
├── components/     # Reusable UI (Button, Input, Toast, Tooltip, …)
├── hooks/          # Auth, toast, and app providers
├── pages/          # SignIn, SignUp, Dashboard, Profile, password flows
├── routes/         # Route wrapper + private routes
├── services/       # Axios API instance
├── styles/         # Global styles
└── utils/          # Validation helpers
```

---

## Testing

Tests use [React Testing Library](https://testing-library.com/react) and live under `src/__tests__/`. Coverage is collected from `src/pages`, `src/components`, and `src/hooks` (see `package.json` → `jest.collectCoverageFrom`).

---

## License

This project is released under the [MIT License](LICENSE).

---

<p align="center">
  Built with the GoBarber stack · React · TypeScript
</p>
