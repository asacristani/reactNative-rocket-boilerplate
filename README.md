<p align="center">
  <img style="width: 50%" src="https://lh3.googleusercontent.com/d/1xZN6eAKeqzUEHGvgli-CGOd80-KovM-6?authuser=0">
</p>
<p align="center">
  <a href="https://github.com/asacristani/eactNative-rocket-boilerplate/actions/workflows/ci.yml" target="_blank">
      <img src="https://github.com/asacristani/reactNative-rocket-boilerplate/actions/workflows/ci.yml/badge.svg" alt="Test">
  </a>
  <a href="https://www.python.org/downloads/release/python-3110/" target="_blank">
      <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript" alt="JavaScript ES6">
  </a>
</p>
<p align="center">
  ⚛️📲 React Native Rocket Boilerplate to build a mobile APP based in Javascript with its most modern technologies!
</p>

---
<p align="center">
    <a href="https://www.python.org/">
      <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black"
      alt="Javascript">
    </a>
    <a href="https://www.python.org/">
      <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
      alt="React Native">
    </a>
    <a href="https://www.python.org/">
      <img src="https://img.shields.io/badge/redux-%23764ABC.svg?&style=for-the-badge&logo=redux&logoColor=white"
      alt="Redux">
    </a>
    <a href="https://www.python.org/">
      <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white"
      alt="Expo">
    </a>
</p>

---

# 🚩 Motivation
Reduce the boilerplate code for implementing common resources in mobile app development as navigation, storage,
security, auth and test.

# 🧩 Features

- **Navigation**: Auth stack and Home tab implemented by React Navigator.
- **Storage**: General storage with Redux, Redux-Persist and Secure Storage for sensitive data. 
- **Authentication**: Log-in and sign-up forms.
- **Smart Design**: All style abstracted and grouped to adapt and change all the style immediately.
- **Folder Structure**: Clean and organized workspace for extending and testing easier.
- **Rock-Solid Reliability**: Linters, Type checking, CI and unit/integration/component/e2e tests.
- **Deployment**: WIP


# ⚙️ Requirements

- [Node](https://nodejs.org/en)
- [Expo](https://docs.expo.dev/get-started/installation/)

# 🎛️ Use
## 🔧  Installation
1. Clone the repo
2. Install the NPM dependencies:
```shell
npm install
```
3. Try pre-commit:
```shell
npm run husky:precommit
```

## 🔌 Run
We use Expo and Expo Go for dev.
```shell
npm expo start
```

## 🧪 Test
WIP

## 📁 Project Structure

This project follows a typical directory structure for a React Native app using Expo. Below is an overview of the project structure:

### Common use
- `App.js`: The main entry point of the application.
- `src/`: The source code of the application.
  - `components/`: Custom React components used in the app.
  - `navigation/`: Navigation-related components.
  - `screens/`: Application screens.
  - `store/`: Redux and Secure Storage.
  - `style/`: Constant used in style like colors and fonts.
- `assets/`: This directory contains various assets used in the app, such as icons and splash screens.
### Others
- `app.json`: The configuration file for Expo.
- `babel.config.js`: Configuration file for Babel.
- `package-lock.json`: Lockfile for project dependencies.
- `package.json`: Configuration file for project dependencies.


Feel free to adapt and extend this structure to meet the needs of your project.


# 🚀 Deploy
WIP