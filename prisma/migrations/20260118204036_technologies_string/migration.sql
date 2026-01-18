-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "technologies" SET NOT NULL,
ALTER COLUMN "technologies" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "technologies" SET NOT NULL,
ALTER COLUMN "technologies" SET DATA TYPE TEXT;
