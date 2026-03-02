-- CreateTable
CREATE TABLE "List" (
    "id" SERIAL NOT NULL,
    "AuthorId" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "imgset" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "authorImg" TEXT NOT NULL,
    "save" TEXT NOT NULL,
    "like" TEXT NOT NULL,
    "seen" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "productInfo" TEXT NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_AuthorId_fkey" FOREIGN KEY ("AuthorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
