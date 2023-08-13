import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { FilmService } from './film.service';
import { Film, Prisma } from '@prisma/client';
import { DirectorService } from 'src/director/director.service';

@Resolver('Film')
export class FilmResolver {
  constructor(
    private readonly filmService: FilmService,
    private readonly directorService: DirectorService,
    ) {}

  @Mutation('createFilm')
  create(@Args('createFilmInput') createFilmInput: Prisma.FilmCreateInput) {
    return this.filmService.create(createFilmInput);
  }

  @Query('Films')
  findAll() {
    return this.filmService.findAll();
  }

  @Query('Film')
  findOne(@Args('id') id: number) {
    return this.filmService.findOne(id);
  }

  @ResolveField('director')
  director(@Parent() film: Film) {
    return this.directorService.findOne(film.directorId);
  }
}
