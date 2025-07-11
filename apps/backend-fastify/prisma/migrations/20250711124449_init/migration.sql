-- CreateTable
CREATE TABLE "Settings" (
    "id" SERIAL NOT NULL,
    "recently_updated_products_visibility" BOOLEAN NOT NULL DEFAULT true,
    "recently_updated_products_visibility_count" INTEGER NOT NULL DEFAULT 3,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);
