import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { FilmInput } from 'src/graphql';

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

  // update(id: number, updateFilmInput: UpdateFilmInput) {
  //   return `This action updates a #${id} film`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} film`;
  // }
}
