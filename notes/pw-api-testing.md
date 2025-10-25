# Playwright API Framework


## Playwright Config
- Defines tesrDir, baseURL, timeouts, reporters etc.
- `playwright.config.ts` file.

## ApiHelper
- Handles HTTP methods + validates responses.\
- Essentially it includes util(reusable) methods that we are going to call through out the project(Framework).

# EnpointClass
- Encapsulates logic for one API resource.
- `EmployeesEndpoints`, `departments.spec.ts` ...

## Spec Files
- Executes full flow and assertions
- `employees.spec.ts`, `departments




POST /employees       → Create new employee
GET /employees/{id}   → Verify created
PATCH /employees/{id} → Partially update (salary, phone)
PUT /employees/{id}   → Full update
DELETE /employees/{id}→ Delete
GET /employees/{id}   → Expect 404


- Each step checks
    * Correct status code.
    * required fileds exist 
    * Database or logical consistency after a change.


# Playwright Concepts Used
- `request`         -> Global API client created by playwright.
- `expect()`        -> Assertion for status codes, data etc.
- `test.describe()` -> Groups related tests
- `test()`          -> Individual test case.
- `fixtures`        ->    

# To Run The Tests
* To Run All the Tests
    - `npx playwright test`
* To run the specific test
    - `npx playwright test filePath -g 'test name'
    -Example
    `npx playwright test /Users/buseaksit/Desktop/HR-API-Automation/tests/resource-tests/employees.spec.ts -g "Create -> Get -> Patch -> Put -> Delete Employee Flow"`
    