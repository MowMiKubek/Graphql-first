import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { DirectorService } from './director.service';
import { Director, Prisma } from '@prisma/client';
import { FilmService } from 'src/film/film.service';

@Resolver('Director')
export class DirectorResolver {
  constructor(
    private readonly directorService: DirectorService,
    private readonly filmService: FilmService,
    ) {}

  @Mutation('createDirector')
  create(@Args('createDirectorInput') createDirectorInput: Prisma.DirectorCreateInput) {
    return this.directorService.create(createDirectorInput);
  }

  @Query('directors')
  findAll() {
    return this.directorService.findAll();
  }

  @Query('director')
  findOne(@Args('id') id: number) {
    return this.directorService.findOne(id);
  }

  @ResolveField('films')
  films(@Parent() director: Director) {
    return this.filmService.find({ directorId: director.id })
  }
}
