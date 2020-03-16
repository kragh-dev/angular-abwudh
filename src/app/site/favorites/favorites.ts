import { IMovie } from 'src/app/movie/movie';

export interface IFavorites {
    favItems: IMovie[]
    total: number
}
