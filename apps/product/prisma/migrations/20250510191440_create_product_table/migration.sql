-- CreateTable
CREATE TABLE "products" (
    "sku_id" TEXT NOT NULL,
    "sku_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("sku_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_code_key" ON "products"("sku_code");
