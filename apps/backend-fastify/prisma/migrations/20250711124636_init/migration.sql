/*
  Warnings:

  - You are about to drop the `Settings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Settings";

-- CreateTable
CREATE TABLE "settings" (
    "id" SERIAL NOT NULL,
    "recently_updated_products_visibility" BOOLEAN NOT NULL DEFAULT true,
    "recently_updated_products_visibility_count" INTEGER NOT NULL DEFAULT 3,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);
