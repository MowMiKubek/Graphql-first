
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class DirectorInput {
    firstname: string;
    lastname: string;
}

export class FilmInput {
    title: string;
    description?: Nullable<string>;
    releaseDate: DateTime;
    directorId: number;
}

export class Director {
    id: number;
    firstname: string;
    lastname: string;
    films: Film[];
}

export abstract class IQuery {
    abstract directors(): Nullable<Director>[] | Promise<Nullable<Director>[]>;

    abstract director(id: number): Nullable<Director> | Promise<Nullable<Director>>;

    abstract Film(id: number): Nullable<Film> | Promise<Nullable<Film>>;

    abstract Films(): Film[] | Promise<Film[]>;
}

export abstract class IMutation {
    abstract createDirector(createDirectorInput: DirectorInput): Director | Promise<Director>;

    abstract createFilm(createFilmInput: FilmInput): Nullable<Film> | Promise<Nullable<Film>>;
}

export class Film {
    id: number;
    title: string;
    description?: Nullable<string>;
    releaseDate: DateTime;
    director: Director;
}

export type DateTime = any;
type Nullable<T> = T | null;
