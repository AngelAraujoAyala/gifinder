export type GifRating = 'g' | 'pg' | 'pg-13';

export enum RequestStatus {
  Initial = 'INITIAL',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Empty = 'EMPTY',
  Error = 'ERROR',
}
export interface Gif {
    id: string;
    title: string;
    url: string;
    username?: string;
    tags: string[];
    rating: GifRating;
    description?: string;
}