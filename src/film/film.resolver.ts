import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FilmService } from './film.service';
import { FilmInput } from 'src/graphql';

@Resolver('Film')
export class FilmResolver {
  constructor(private readonly filmService: FilmService) {}

  @Mutation('createFilm')
  create(@Args('createFilmInput') createFilmInput: FilmInput) {
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

}