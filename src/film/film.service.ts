import { Injectable } from '@nestjs/common';
import { FilmInput } from 'src/graphql';

@Injectable()
export class FilmService {
  create(createFilmInput: FilmInput) {
    return { ...createFilmInput, id: 1};
  }

  findAll() {
    return [{
      id: 1,
      title: "Oppenheimer",
      releaseDate: "wczoraj"
    }]
  }

  findOne(id: number) {
    return {
      id: 1,
      title: "Oppenheimer",
      releaseDate: "wczoraj"
    }
  }

  // update(id: number, updateFilmInput: UpdateFilmInput) {
  //   return `This action updates a #${id} film`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} film`;
  // }
}
