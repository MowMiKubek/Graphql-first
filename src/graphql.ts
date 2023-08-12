
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class FilmInput {
    title: string;
    description?: Nullable<string>;
    releaseDate: DateTime;
}

export class Film {
    id: number;
    title: string;
    description?: Nullable<string>;
    releaseDate: DateTime;
}

export abstract class IQuery {
    abstract Film(id: number): Nullable<Film> | Promise<Nullable<Film>>;

    abstract Films(): Film[] | Promise<Film[]>;
}

export abstract class IMutation {
    abstract createFilm(input: FilmInput): Nullable<Film> | Promise<Nullable<Film>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
