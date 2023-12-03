# Doctors Hub

In this project, the data of the doctors was fetched using **server actions** in **NextJS**. The front end of the application is developed using **Next.js** and **TailwindCSS**. RESTful API along with the Doctors API provided by Digitale Patientenhilfe GmbH using fetch requests was used to GET, POST, PUT, DELETE the data. Third-party UI libraries were used for clean and consistent UI. **Clean Architecture** is used for improved code quality, maintainability and scalability.

## Table of Contents

- [Doctors Hub](#doctors-hub)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [File structure](#file-structure)

## Installation

1. Clone the repository and navigate to the project directory:

   ```shell
   git clone https://github.com/RBCodewalker/doctors-hub.git
   ```

   ```shell
   cd doctors-hub
   ```

2. Install the dependencies (make sure you have NodeJS and npm):

   ```shell
    npm install
   ```

3. Run website locally:

   ```shell
   npm run dev
   ```

4. Access the application in your browser:
   Open [http://localhost:3000](http://localhost:3000) in your preferred web browser.

## File structure

```
.
├── README.md
├── components.json
├── file-structure.txt
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── logo.svg
├── src
│   ├── api
│   │   └── api.ts
│   ├── app
│   │   ├── favicon.ico
│   │   ├── global.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── add-doctors.tsx
│   │   ├── delete-doctors.tsx
│   │   ├── doctors.tsx
│   │   ├── ui
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── loader.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   └── use-toast.ts
│   │   └── update-doctors.tsx
│   ├── entities
│   │   └── doctor.ts
│   ├── interfaces
│   │   ├── doctor-add.ts
│   │   ├── doctor-delete.ts
│   │   ├── doctor-get-update.ts
│   │   ├── doctor-get.ts
│   │   └── doctor-update.ts
│   ├── lib
│   │   └── utils.ts
│   └── use-cases
│       └── doctor-use-case.ts
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json
```
