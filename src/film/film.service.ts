import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FilmService {
  constructor(private prismaService: PrismaService) {}

  create(createFilmInput: Prisma.FilmCreateInput) {
    return this.prismaService.film.create({
      data: createFilmInput
    });
  }

  findAll() {
    return this.prismaService.film.findMany();
  }

  findOne(id: number) {
    return this.prismaService.film.findUnique({
      where: { id },
    })
  }

  find(query: any) {
    return this.prismaService.film.findMany({
      where: query
    })
  }
}
