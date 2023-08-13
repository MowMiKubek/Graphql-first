import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmResolver } from './film.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { DirectorService } from 'src/director/director.service';

@Module({
  providers: [FilmResolver, FilmService, DirectorService, PrismaService],
  exports: [FilmService]
})
export class FilmModule {}
