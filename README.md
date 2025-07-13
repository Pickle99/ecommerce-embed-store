# ecommerce-embed-store

`yarn prisma generate`

`yarn prisma migrate dev --name init`

`yarn generate-settings`

# Create .env file

DATABASE_URL="postgresql://postgres:<YOUR_PASSWORD>@postgres/EcwidPostgresDB"

ECWID_STORE_ID=<YOUR_STORE_ID>

ECWID_TOKEN=<YOUR_ECWID_PUBLIC_TOKEN>

# Run from docker with a single command

Please note that first of all you need docker to be configured on your machine, as well as docker compose

`docker compose up --build`
