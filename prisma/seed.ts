import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.film.deleteMany();
    const fakeFilm = await prisma.film.create({
        data: {
            title: "Hello world",
            description: "Takie tam 123123123",
            releaseDate: new Date()
        }
    })

    console.log(fakeFilm);
}

main()
    .catch(e => {
        console.log(e)
        process.exit(1)
    }) 
    .finally(async () => {
        await prisma.$disconnect();
    })