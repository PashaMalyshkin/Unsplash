import { client } from '../utils/fetchClient';
import { Image } from '../types/Image';
import { SearchResponse } from '../types/SearchResponse';

const apiKey = process.env.REACT_APP_ACCESS_KEY;
const photo_url = `photos?client_id=${apiKey}&count=30`;
const search_url = `search/photos?&client_id=${apiKey}&count=30`;

export const getImages = (page: number) => {
  return client.get<Image[]>(`${photo_url}&page=${page}`);
};

export const searchImages = (query: string, page: number) => {
  return client.get<SearchResponse>(`${search_url}&query=${query}&page=${page}`);
};

export const getOneImage = (url: string) => {
  return client.get<Image>(`${url}/?client_id=${apiKey}`);
};
