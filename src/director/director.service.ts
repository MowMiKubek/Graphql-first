import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DirectorService {
  constructor(
    private prismaService: PrismaService,
    ) {}

  create(createDirectorInput: Prisma.DirectorCreateInput) {
    return this.prismaService.director.create({ data: createDirectorInput });
  }

  findAll() {
    return this.prismaService.director.findMany();
  }

  findOne(id: number) {
    return this.prismaService.director.findFirst({
      where: { id }
    });
  }

  
}
