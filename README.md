# Advansio-Backend-Challenge

## Technologies Used

- [NodeJS](https://nodejs.org/en/download/)
- [ExpressJS](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [S]

## Getting Started

---

### Endpoints

- `/api/v1/user/register`
  This endpoint adds a user.
  `Requirement`: email or password to be supplied
- `/api/v1/user//login`
  This endpoint login a user.
  `Requirement`: email or password to be supplied
- `/api/v1/comments/`
  This endpoint create comment, getComment with all replies, delete comment, update commenet.

### Installing/Run locally

- Make sure you have `nodejs`, `postgresql` installed.

  ```bash

    - npm install/yarn

    - Create/configure `.env` environment with the following credentials
      DB_CONFIG_PASSWORD
      DB_CONFIG_TEST
      DB_CONFIG_HOST
      DATABASE_URL
      DB_CONFIG_DEV
      DB_CONFIG_USERNAME
      SECRET

    - Run `npm run migrate or yarn run migrate` to create database table
    _ Run `npm run seed or yarn run seed` to seed database
    - Run `npm start or yarn start` to start the server
    - cd clients
    - Run `npm start or yarn start` to start the clients
  ```

### Testing

- To test or consume the API locally, you can make use of [_Postman_](https://www.getpostman.com) to simulate a front-end client.
- You can also test by running `npm test`.
- You can also test by starting the client side.

## HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `POST` Create a data
- `GET` Get a data or data
- `PATCH` Update comment with replies
- `DELETE` delete a data or data

### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- `200` `OK` The request was successful
- `201` `Created` The request was successfully created
- `400` `Bad Request` There was a problem with the request (security, malformed)
- `404` `Not Found` route or data not found
- `401` `Unauthorized` The supplied API credentials are invalid
