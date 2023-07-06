import { Image } from './Image';

export interface SearchResponse {
  total: number
  total_pages: number;
  results: Image[];
}
