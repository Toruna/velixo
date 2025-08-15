# velixo

## Code Structure

```
root
├── playwright-test-task/
│   ├── .github/
│   ├── .idea/
│   ├──  base/
|   |   ├── base_page.ts
│   ├── pages/
|   |   ├── excel_page/
|   |   |   ├── excel_sheet_function_helpers.ts/
|   |   |   ├── excel_sheet_locators.ts
|   |   ├── gmail_login/
|   |   |   ├── login_function_helpers.ts
|   |   |   ├── login_page_locators.ts
|   ├── test-results/
|   |   ├── .last-run.json
|   ├── tests/
|   |   ├── today-function.spec.ts
|   ├── utils/
|   |   ├── Constants.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```
- `playwright-test-task/`:  Main directory containing the Playwright test automation framework files.
    - `.idea/`: IntelliJ project configuration files (auto-generated).
    - `base/`: Contains base classes and common utilities for the testing framework.
        - `base_page.ts`: Defines the BasePage class with common methods used across different page objects.
    - `pages/`: Directory containing page-specific modules.
        - `excel_page/`: Contains locators and function helpers for Excel page.
            - `excel_sheet_function_helpers.ts`: Contains Excel sheet function helpers.
            - `excel_sheet_locators.ts`: Contains Excel sheet locators.
        - `gmail_login/`: Contains function helpers and locators for gmail login.
            - `login_function_helpers.ts`: Contains function helpers for gmail page.
            - `login_page_locators.ts`: Contains locators for gmail page.
    - `test-results/`: Stores the test result files generated after each test run.
        - `.last-run.json`: A file containing details about the last test run.
    - `tests/`: Contains the test files organized by modules.
        - `today-function.spec.ts`: Contains test related to Today function in Excel sheet.
    - `utils/`: Contains utility scripts used across the testing framework.
        - `constants.ts`: Defines constants used across the testing framework.
- `.gitignore`: Lists files and directories that should be ignored by Git.
- `package.json`: Configuration file for npm, specifying project dependencies and scripts.
- `package-lock.json`: Automatically generated file to lock the versions of dependencies installed.
- `playwright.config.ts`: Configuration file for Playwright, defining test settings and environment.
- `README.md`: Provides an overview of the project, including structure and usage instructions.
- `tsconfig.json`: TypeScript configuration file specifying compiler options.

### 1. Clone the Repository
```bash
git clone  git@github.com:Toruna/velixo.git
cd velixo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Tests
```bash
npx playwright test
```
To run a specific test file:
```bash
npx playwright test tests/test_name.spec.ts
```

### 4. View HTML Report
```bash
npx playwright show-report
```


### Install Playwright Browsers(if not yet installed)
```bash
npx playwright install
```