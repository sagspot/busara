# Data Collection App

A data collection frontend app

### Version

1.0.0

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Environment variables](#environment-variables)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

This is a frontend of a data collection app. Pages can only be accessed while a user is authenticated.

Once a registered user signs in, they are presented with all surveys they have completed. Clicking an individual survey opens details of that specific survey.

A user can also view their profile and can start a new survey.

## Technologies Used

- React
- Bootstrap
- SCSS

## Usage

- Create an account from Busara website, and request client secret and id
- Login to your account, with your email, secret given and password to get a token
- Access dashboard to view all surveys completed by user
- Click on individual survey to view details of that survey _(Currently has dummy data as the server contains no filled survey)_
- Start a new survey from the `Start Survey` menu
- View your profile or logout from the user icon on top-left of the screen

## Environment variables

`CHOKIDAR_USEPOLLING=true`

`REACT_APP_API_URL=http://fullstack-role.busara.io`

## Project Status

Project is: _complete_ .

## Room for Improvement

- Get data from server and populate fields of survey details
- Get `Forgot password` link to work

## Acknowledgements

- This project was inspired by the [Busara Team](https://busaracenter.org/).

## Contact

### Author

Oliver Sagala
[Sagspot](https://github.com/sagspot)
