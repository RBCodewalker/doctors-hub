# Doctors Hub

In this [project](https://doctors-hub.vercel.app), the data of the doctors was fetched using **server actions** in **NextJS**. The front end of the application is developed using **Next.js** and **TailwindCSS**. RESTful API along with the Doctors API provided by Digitale Patientenhilfe GmbH using fetch requests was used to GET, POST, PUT, and DELETE the data. Third-party UI libraries were used for clean and consistent UI. **Clean Architecture** is used for improved code quality, maintainability and scalability.

## Table of Contents

- [Doctors Hub](#doctors-hub)
  - [Table of Contents](#table-of-contents)
  - [Local Installation](#local-installation)
  - [Open App in Deployment](#open-app-in-deployment)
  - [Usage](#usage)
  - [File structure](#file-structure)

## Local Installation

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

## Open App in Deployment

The App is deployed in **Vercel** under the domain [https://doctors-hub.vercel.app/](https://doctors-hub.vercel.app)

## Usage

Pagination is utilized in the app to achieve lazy-loading(infinite scrolling). Other functionalities include adding and editing doctors through both the API and the user interface, along with the capability to delete doctor data. Below is a comprehensive guide detailing the usage of each of these key features::

- **Infinite Scroll**:\
Sends a GET request to show list of doctors in the view while scrolling.

   - Scroll down until the loader animation disappears.
   - In case of a network or fetch error, error is displayed and retry button is visible in the view.

- **Add Doctor**:\
Sends a POST request to add a new doctor object.
   
   - Click on the 'Add Doctor' button. A form will popup.
   - Fill the form with correct details. (email, name and phone number must be   unique and are validated)
   - Click on the tick icon. If there are errors, make sure email and phone number are unique, alert appears on the bottom right.
   - If you want to abort adding, click anywhere outside the form.

- **Update Doctor**:\
Sends a PUT request to update changed fields in any doctor object.

   - Click on the edit icon on the card of a doctor you want to update. A form will popup.
   - You can change one or more fields. This will work similar to add feature for errors and validation.
   - Click on the tick icon and you can immediately notice the change as the function is called again to specifically change the updated field.
   - If you want to cancel editing, click anywhere ouside the form.

- **Delete Doctor**:\
Sends a DELETE request to remove the specified doctor object.

   - Click on the trash icon on the card of a doctor you want to remove. An alert will popup.
   - You can change choose to proceed with the delete or cancel it.
   - Once the data of the specific doctor is removed, the UI filters the data to remove that doctor data from the view.

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
