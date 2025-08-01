# Project Overview

Ecommerce store, where we use custom script to embed it inside vue.
We are able to edit CSS inside DOM elements, add some custom div, then apply styles to it and etc.

The app works from Yarn (version 4+)

There is 3 apps:

#### Notice that right now app is working only from localhost (localhost:8000 , localhost:3333), and not from 127.0.0.1 or whatever (because i have not configured .env for url-s and have not made proper tunneling. Since its a test task i have not deeped dived in all of the possible things)

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

you can just copy-paste it (DATABASE_URL) if you want to run from docker, if not change it accordingly for local

ECWID_STORE_ID=<YOUR_STORE_ID>

ECWID_TOKEN=<YOUR_ECWID_PUBLIC_TOKEN>

P.S do not include < > it is just a placeholder

# Back-end commands

`yarn prisma generate`

`yarn prisma migrate dev --name init`

`yarn generate-settings`

`yarn dev`

Or Build and then run

`yarn build`

`yarn start`

### Do not forgot to configure prettier locally, for VSC you will need settings.json

# How to start the project Locally (without docker)

First of all, from root directory run `yarn install`, then:

1. run `yarn build` from apps/frontend-vue

2. navigate to apps/backend-fastify and run Step-By-Step (dont forgot that you need .env file and configured Postgres with user, database and etc.)

   `yarn generate`

   `yarn prisma migrate dev --name init` (just in case)

   `yarn generate-settings` - to seed the database with default settings of store widget

   `yarn dev`

3. navigate to apps/frontend-vue-settings and run

   `yarn dev-settings`

   or do it with build (check package.json scripts)

Now we are good to go !

! Notice that right now app is working only from localhost, and not from 127.0.0.1 or whatever (because i have not configured .env for url-s and have not made proper tunneling. Since its a test task i have not deeped dived in all of the possible things)

## Run from docker with a single command (Right now works in a production-like mode "but halfly, i would say")

Please note that first of all you need docker to be configured on your machine, as well as docker compose

if you are running from docker, attach the DATABASE_URL in .env like this (do not forgot other .env variables which i described above):

`DATABASE_URL="postgresql://postgres:231289@postgres/EcwidPostgresDB"`

then run `docker compose up --build`

You need this ports to be available:

1. :5433 (for postgres inside docker) (yes, 5433 , and not 5432, because 5432 is possible to not be available if you already have postgres, so to make the life easier, i just run the posgres on 5433)

2. :8000 (for backend)

3. :3333 (for frontend-settings)

## Tech Stack

Vue 3 (compositions api)

Ecwid Storefront / Ecwid rest api / Ecwid CSS Framework

NodeJS with Fastify framework

PostgreSQL Database

TypeScript

Yarn (version 4+)

Docker

Node (tested on 22 version)

### Q & A

Possible questions and answers:

1. Why i dont use vue-router to render ecwid app on / route and settings page (component or whatever) on /settings route. ?

   **Answer: because there was a problems with it, initially it was working, but when i was navigating to cart and then back to user profile or whatever another page, ecwid script was going to infinity loop. Also i dont had the control over ecwid app, from where (i think) it is possible to create empty page directly, and after which edit is the way we want (it is just my guess, or maybe there is another cleaner way i dont know about)**

2. Why i have frontend-vue and frontend-vue-settings ?

   **Answer: Frontend vue serves as a Ecommerce Script (ecwid), which is built and hosted on Fastify-server. Frontend-vue-settings servers for separate settings page, which uses ecwid css framework for styling.**

3. Why i use :8000 port for backend, and :3333 port for frontend-vue-settings ?

   **Answer: because usually :8000 port servers for backends, and :3333 is just a port, usually frontend have to serve on :3000, but i made it to work from :3333, because why not ?**

4. Why i have not made .env for frontends, like BACKEND_URL or something ?

   **Answer: because it is just a test task for now, so i have not deep-dived into it, kept it on localhost, think it is fine even like this, not very important right now.**

5. Why i dont use absolute paths (@) ?

   **Answer: Yes, i know that it is better to use @ paths, however i just kept it like this, since for very small project i think it is pretty fine.**

6. Why there is no clear project structure for frontends (both) ?

   **Answer: Yes, i have not made big separation between stuff like inputs or other UI components, pages, api and etc, since for very small project it would be overkill to create a clean project structure, so i just kept it like that, and concentrated on backend project structure, because there was more stuff.**

7. Why do i add extra fields to order, but then use Postgres to save orderId and product ids that were ordered, when i just can get order and see its orderExtraFields manually from ecwid Rest API ?

   **Answer: i was unable to reach it (some limitations or whatever), so i had to imagine some workaround**

8. Why do i use Backend to send fetch requests to Ecwid Rest API, and not frontend ?

   **Answer: Because it is more secure to be in the backend. Yes, we can setup proxy in frontend and do this from there, however i usually use backend if i have any secret keys or some environmental variables, since in frontend we can easily see them from network.**

9. Why do i use nginx ?

   **Answer: I had to use nginx, so we can download csv or xlsx files when we are not on devServer (streaming)**

## Note

All of the files were created manually by hand, there was no Vue-Cli or fastify-cli or whatever

Started from package.json and ts.config, ended with vite configs and components and etc.

## Changelog 18.07.2025 (00:38 +-)

1. Change the style of products inside RUP -> now it looks like products grid on catalog

2. Extra fields where unable to delete, when we were deleting the product from cart (in localStorage) -> Now they will

3. Add missing parameter inside orderExtraFields -> orderDetailsDisplaySection: 'order_comments', so now we must see the order extra fields on admin side (however i am unable to get to this page, so i dont know will we see it or not, made it blindly)

4. Now if we will turn off RUP widget from settings, it will disappear completely

5. Added explanational text to RUP dropdown (query limiter)

6. Added more explanational texts inside Settings page, removed the placeholder, placeholder replaced to some text.

7. Added landing-like view on category page (landing?)

8. Fixed All products block on Settings page, now its width will be the same as we have for widget settings

9. Added pagination for Products

10. Added more control (perPage) for pagination on Settings

11. Added cursor pointers for checkboxes, and some other stuff i fastly found, or which was described

12. Now we will redirect to exact product page (from RUP widget) - only if we will click on Image or Product name

13. Removed the text _Added to cart and ordered_ from table (settings page), instead of that, i moved it to CSV and XLSX files (the name is kinda big, didnt knew how to name it, it just counts how much times we actually ordered the item via the help of RUP)

14. Split the Ecwid logic from main.ts by parts

15. Move SVG icons to the components (missing ones)

16. Added new Shared folder, where i moved icon which were used on frontend-vue and frontend-vue-settings (tbh i dont know how much of neccessarity it have, but i just wanted to try)

17. Added the case for ProductTableList if the products length 0

18. Changed the From-Code sort, to sort which Ecwid rest api already have built-in

19. Now we will get only necessary data from Rest Api (select the fields from query, instead of using unneccessary data)

20. added domWaiter to wait for Ecwid to fully load, and only after that apply the settings button in footer, and widget, because in some workarounds we were unable to see settings page redirect button
