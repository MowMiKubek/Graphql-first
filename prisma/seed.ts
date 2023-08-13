import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
await prisma.film.deleteMany();
await prisma.director.deleteMany();

const directors = await Promise.all([
        prisma.director.create({
        data: {
            firstname: "Adam",
            lastname: "Nowak",
        },
        }),
        prisma.director.create({
        data: {
            firstname: "Emily",
            lastname: "Johnson",
        },
        }),
    ]);

    const films = await Promise.all([
        prisma.film.create({
        data: {
            title: "The Adventure Begins",
            description: "An exciting journey awaits!",
            releaseDate: new Date("2023-08-01"),
            directorId: directors[0].id,
        },
        }),
        prisma.film.create({
        data: {
            title: "Romantic Sunset",
            description: "A heartwarming story of love.",
            releaseDate: new Date("2023-07-15"),
            directorId: directors[1].id,
        },
        }),
        prisma.film.create({
        data: {
            title: "Mystery Manor",
            description: "Uncover the secrets of the old mansion.",
            releaseDate: new Date("2023-09-10"),
            directorId: directors[0].id,
        },
        }),
        prisma.film.create({
        data: {
            title: "Comedy Chaos",
            description: "Laughs and humor for everyone.",
            releaseDate: new Date("2023-06-20"),
            directorId: directors[1].id,
        },
        }),
        prisma.film.create({
        data: {
            title: "Sci-Fi Odyssey",
            description: "Embark on an intergalactic journey.",
            releaseDate: new Date("2023-10-05"),
            directorId: directors[0].id,
        },
        }),
    ]);

    console.log("Directors:", directors);
    console.log("Films:", films);
}

main()
    .catch(e => {
        console.log(e)
        process.exit(1)
    }) 
    .finally(async () => {
        await prisma.$disconnect();
    })