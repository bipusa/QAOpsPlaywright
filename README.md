# 🚀 Playwright Test Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Test%20Automation-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue)
![License](https://img.shields.io/badge/Status-Learning%20Project-success)

---

## 📖 Project Overview

This repository demonstrates a scalable web test automation framework built using **Playwright** and **JavaScript**, following modern automation practices such as the **Page Object Model (POM)**, reusable page objects, API integration, and Continuous Integration with GitHub Actions.

The framework was developed as part of my continuous professional development to strengthen my expertise in modern Quality Engineering and Test Automation. The goal was not only to automate test cases, but also to design a maintainable and reusable automation framework similar to those used in real-world software projects.

---

## ✨ Key Features

- ✅ Playwright with JavaScript
- ✅ Page Object Model (POM)
- ✅ Modular and reusable framework structure
- ✅ End-to-End UI Automation
- ✅ API integration within UI tests
- ✅ GitHub Actions CI workflow
- ✅ HTML Test Reports
- ✅ Reusable helper utilities
- ✅ Clean separation between page objects and test scripts

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Playwright | End-to-End UI Automation |
| JavaScript | Programming Language |
| Playwright Test | Test Runner |
| Git & GitHub | Version Control |
| GitHub Actions | Continuous Integration |
| REST API | API Validation |

---

## 📁 Project Structure

```text
playwright-automation-framework
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── LoginPage.js
│   ├── BookingPage.js
│   ├── EventsPage.js
│   └── AdminPage.js
│
├── tests/
│   ├── test.spec.js
│   ├── testPOM.spec.js
│   ├── RefundEligibility.spec.js
│   ├── crossUserbooking.spec.js
│   ├── webAPItest.spec.js
│   └── utils/
│       └── APIUtils.js
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## 🎯 Test Scenarios

This framework covers different business scenarios including:

- User authentication
- Booking workflows
- Cross-user booking validation
- Refund eligibility validation
- API-assisted testing
- End-to-end business flow verification

---

## ▶️ Getting Started

### Clone the repository

```bash
git clone https://github.com/bipusa/QAOpsPlaywright.git
```

### Install dependencies

```bash
npm install
```

### Execute all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### View HTML report

```bash
npx playwright show-report
```

---

## ⚙️ Continuous Integration

The project includes a GitHub Actions workflow that demonstrates how automated Playwright tests can be executed as part of a CI pipeline, helping validate application quality whenever changes are introduced.

---

## 💡 What I Learned

Through building this framework I strengthened my practical understanding of:

- Playwright automation
- JavaScript
- Page Object Model
- Modular framework design
- API integration
- GitHub Actions
- Continuous Integration
- End-to-End test automation
- Writing maintainable and reusable automation code

---

## 🚀 Future Improvements

- TypeScript migration
- Cucumber BDD integration
- Docker support
- Allure Reporting
- API automation framework expansion
- Parallel execution optimization

---

## 👩‍💻 About This Project

As a QA Engineer with over four years of professional experience in software quality assurance, my experience has primarily focused on manual testing across SaaS and connected device applications.

To expand my automation expertise, I built this framework to apply modern automation concepts, improve my engineering skills, and practice designing maintainable test automation solutions. This project reflects my commitment to continuous learning and my transition toward becoming a well-rounded Quality Engineer.

---

## 📬 Contact

**Bipusa Thapa**

📍 Nürnberg, Germany

📧 thapa.bipusa@outlook.com

🔗 GitHub: https://github.com/bipusa
