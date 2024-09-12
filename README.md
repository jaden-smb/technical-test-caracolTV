# Handlebars LESS Project

This project is a technical test for the Caracol TV Front-End Developer position, created by Santiago Montoya. It demonstrates the use of Handlebars templating engine, LESS CSS preprocessor, and Gulp task runner to create a dynamic web application.

## Project Structure

The project consists of the following main components:

1. Handlebars templates for rendering dynamic content
2. LESS stylesheets for styling
3. JavaScript for handling user interactions and data fetching
4. Gulp for task automation
5. Cypress for end-to-end testing

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v12 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/jaden-smb/technical-test-caracolTV.git
   cd technical-test-caracolTV
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Project

To start the development server and watch for changes:

```
npm start
```

This command will:
1. Compile LESS files to CSS
2. Start a local server
3. Open the project in your default browser
4. Watch for changes and automatically reload the browser

## Running Tests

This project uses Cypress for end-to-end testing. To run the tests:

1. Make sure the development server is running (`npm start`)
2. In a separate terminal window, run:
   ```
   npx cypress run
   ```

This will run the Cypress tests in headless mode. To open the Cypress Test Runner GUI:

```
npx cypress open
```

## Project Details

- The main entry point is `index.html`, which includes the compiled CSS and JavaScript.
- `main.js` handles the dynamic content rendering using Handlebars templates.
- Templates are located in the `src/views` directory.
- LESS files are in the `src/styles` directory.
- The Gulp configuration is in `gulpfile.js`.
- Cypress tests are in the `cypress/e2e` directory.