-- CreateTable
CREATE TABLE "recently_updated_products_from_order" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER[],

    CONSTRAINT "recently_updated_products_from_order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recently_updated_products_from_order_orderId_key" ON "recently_updated_products_from_order"("orderId");
