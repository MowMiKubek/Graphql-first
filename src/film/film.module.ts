import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmResolver } from './film.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [FilmResolver, FilmService, PrismaService],
})
export class FilmModule {}
