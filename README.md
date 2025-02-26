# Cypress E2E Testing for SauceDemo

## Project Overview
This project is a practice exercise for creating End-to-End (E2E) automation tests using [SauceDemo](https://www.saucedemo.com/) with Cypress. It helps in understanding test automation concepts and improving skills in writing Cypress test scripts.

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended version: latest LTS)
- [Cypress](https://www.cypress.io/)

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Test Structure
The test suite consists of the following test scenarios:
1. **Login Test**: Verifies login functionality with valid credentials.
2. **Product Selection & Validation**: Selects a product and verifies its details.
3. **Purchase Process**: Adds all products to the cart, proceeds to checkout, and completes the purchase.
4. **Logout Test**: Ensures a user can log out successfully.

## Running Tests
To execute the tests, use one of the following commands:

- Run tests in **headless mode**:
  ```sh
  npx cypress run
  ```

- Open Cypress UI for interactive testing:
  ```sh
  npx cypress open
  ```

## Test File
The main test script is located in:
```
/cypress/e2e/saucelab.cy.js
```
This file contains:
- **LoginPage** class for handling login interactions.
- **InventoryPage** class for managing product interactions.
- **CartPage** class for handling cart operations.
- **ProductPage** class for validating product details.
- **YourInformationPage** class for user information input.
- **OverviewPage** class for reviewing order details.
- **CompletePage** class for order confirmation.

## Reporting
Cypress provides test execution reports which can be accessed after running tests. You can integrate additional reporting tools like Mochawesome for enhanced reports.

## Conclusion
This project is designed to practice automation testing using SauceDemo, providing hands-on experience with Cypress. Contributions and improvements are welcome!

