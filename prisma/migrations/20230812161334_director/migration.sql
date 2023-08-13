-- CreateTable
CREATE TABLE "Director" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "releaseDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "directorId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Film_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Film" ("description", "directorId", "id", "releaseDate", "title") SELECT "description", "directorId", "id", "releaseDate", "title" FROM "Film";
DROP TABLE "Film";
ALTER TABLE "new_Film" RENAME TO "Film";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
