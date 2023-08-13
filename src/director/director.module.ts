import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorResolver } from './director.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { FilmService } from 'src/film/film.service';

@Module({
  providers: [DirectorResolver, DirectorService, FilmService, PrismaService],
  exports: [DirectorService]
})
export class DirectorModule {}
