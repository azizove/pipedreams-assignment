# Lerna Application - API and WEB Client

This repository contains a multi-part application managed with Lerna. The application consists of two main parts: an API and a WEB client. Both parts are designed to work together to provide a seamless user experience.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Using npm](#using-npm)
  - [Using Docker Compose](#using-docker-compose)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This application is a multi-part project that employs Lerna to manage multiple packages, specifically an API and a WEB client. The API serves as the backend that provides data and functionality to the WEB client, which is the front-end interface.

## Getting Started

### Prerequisites

Before running the application, make sure you have the following tools installed:

- Node.js and npm
- Docker and Docker Compose (only required for running with Docker)

### Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/azizove/pipedreams-assignment
cd pipedreams-assignmen
```

2. Install dependencies using npm:

```
npm install
```

## Running the Application

### Using npm

To run the application using npm, you need to start both the API and WEB client separately. Follow the steps below:

1. Start the API:

```
cd packages/api
npm start
```

The API will be accessible at `http://localhost:3000`.

2. Start the WEB client:

```
cd packages/web-client
npm start
```

The WEB client will be available at `http://localhost:3001`.

### Using Docker Compose

Alternatively, you can run the application using Docker Compose. Docker Compose will orchestrate the setup for both the API and WEB client containers. Make sure you have Docker Compose installed.

1. Run Docker Compose from the root directory of the project:

```
docker-compose up
```

Docker Compose will build and start the containers for the API and WEB client.

## Folder Structure

The application is structured as follows:

```
lerna-application/
  |- packages/
    |- api/
      |- ... (API-specific files and folders)
    |- web-client/
      |- ... (WEB client-specific files and folders)
  |- ... (other configuration files and shared resources)
```

The `packages` directory contains two main packages: `api` and `web-client`. Each package has its own specific codebase and dependencies.

## Contributing

We welcome contributions to enhance the functionality and fix issues of this application. If you would like to contribute, please follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch with a descriptive name for your changes.
3. Make your modifications and additions.
4. Commit and push your changes to your forked repository.
5. Create a pull request (PR) to the main repository.

We will review your PR and merge it if it meets the project's guidelines.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.