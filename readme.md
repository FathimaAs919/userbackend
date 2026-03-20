users-backend

User Management Dashboard backend using FeathersJS, PostgreSQL, and Knex

About

This project provides the backend API for the User Management Dashboard.

Built with FeathersJS
 for REST API and real-time services

Uses PostgreSQL with Knex.js for database management

Provides CRUD operations on users

Supports soft delete (deleted: true) and filters active users (deleted: false)

Prerequisites

Node.js
 v18+

npm

PostgreSQL database

Setup Instructions

Clone the repository

git clone <backend_repo_url>
cd users-backend

Install dependencies

npm install

Configure environment variables

Create a .env file in the root:

PORT=3030
DATABASE_URL=postgres://postgres.fhxwkvimynettvsmndfa:FathimaSalim@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres

Replace yourpassword and user_dashboard with your PostgreSQL password and database name.

Run database migrations

npm run migrate

This will create the users table with fields:
id, name, email, gender, deleted, created_at, updated_at

Start the backend server

npm start

Server runs at http://localhost:3030

API Endpoints
Method	Endpoint	Description
GET	/users	Get all active users (deleted=false)
POST	/users	Add a new user
PATCH	/users/:id	Update a user or soft delete

Soft Delete Example

PATCH /users/1
{
  "deleted": true
}
Testing

Run tests:

npm test

All tests in the test/ directory will run automatically.

Feathers CLI

Use the Feathers CLI for service and hook management:

npx feathers help               # Show all commands
npx feathers generate service   # Generate a new service
npx feathers generate hook      # Add hooks for validation, authentication, etc.
Database Migrations

This project uses Knex migrations:

Create a new migration:

npx knex migrate:make users.cjs

Run migrations:

npx knex migrate:latest

Rollback migrations:

npx knex migrate:rollback
Help & Documentation

FeathersJS Docs

Knex.js Docs

PostgreSQL Docs

This README is submission-ready. It clearly explains:

Environment setup

Database migration steps

Running the backend

API usage

