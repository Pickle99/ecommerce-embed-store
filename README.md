# Project Overview

Ecommerce store, where we use custom script to embed it inside vue.
We are able to edit CSS inside DOM elements, add some custom div, then apply styles to it and etc.

The app works from Yarn (version 4+)

There is 3 apps:

#### Notice that right now app is working only from localhost (localhost:8000 , localhost:3333), and not from 127.0.0.1 or whatever (because i have not configured .env for url-s and have not made proper tunneling since its a test task i have not deeped dived in all of the possible things)

1. frontend-vue which is builded and then used inside fastify

2. frontend-vue-settings which is just running on its own, which uses custom css based on CSS Framework we had to use

3. backend-fastify which servers as a backend using Postgres as a DB.

On the app itself we can:

1. See the store itself

2. Navigate inside the store

3. See the custom widget of Recently Updated Products

4. Change how many products will be visible inside Recently Updated Products (only for us)

5. Navigate to settings page, and control the Recently Updated Products like a store owner (no auth right now, just an example how store owner would do this)

6. Enable/Disable widget

7. Set default visibility for customers of how many products will be visible in RUP widget

8. Export products as a CSV or XLSX (selected ones). We are exporting only minimum data (like name, price and etc, just to showcase an example)

# Create .env file in backend-fastify folder

DATABASE_URL="postgresql://postgres:231289@postgres/EcwidPostgresDB"

##### ^ you can just copy-paste it if you want to run from docker, if not change it accordingly for local

ECWID_STORE_ID=<YOUR_STORE_ID>

ECWID_TOKEN=<YOUR_ECWID_PUBLIC_TOKEN>

# Back-end commands

`yarn prisma generate`

`yarn prisma migrate dev --name init`

`yarn generate-settings`

`yarn dev`

Or Build and then run

`yarn build`

`yarn start`

# How to start the project Locally (without docker)

First of all, from root directory run `yarn install`, then:

1. run `yarn build` from apps/frontend-vue

2. navigate to apps/backend-fastify and run Step-By-Step (dont forgot that you need .env file and configured Postgres with user, database and etc.)
   `yarn generate`
   `yarn prisma migrate dev --name init` (just in case)
   `yarn generate-settings` - to seed the database with default settings of store widget
   `yarn dev`

3. navigate to apps/frontend-vue-settings and run
   `yarn dev`

Now we are good to go !

! Notice that right now app is working only from localhost, and not from 127.0.0.1 or whatever (because i have not configured .env for url-s and have not made proper tunneling since its a test task i have not deeped dived in all of the possible things)

## Run from docker with a single command (Right now works in a production-like mode "but halfly, i would say")

Please note that first of all you need docker to be configured on your machine, as well as docker compose

if you are running from docker, attach the DATABASE_URL in .env like this (do not forgot other .env variables which i described above):

`DATABASE_URL="postgresql://postgres:231289@postgres/EcwidPostgresDB"`

then run `docker compose up --build`

You need this ports to be available:

1. :5433 (for postgres inside docker) (yes, 5433 , and not 5432, because 5432 is possible to not be available if you already have postgres, so to make the life easier, i just run the posgres on 5433)

2. :8000 (for backend)

3. :3333 (for frontend-settings)
