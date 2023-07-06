import React, { FC } from 'react';

interface Props {
  query: string;
  onSearch: (query: string) => void;
}

export const SearchInput: FC<Props> = ({ query, onSearch }) => (
  <input
    type="text"
    name="search"
    className="search__input"
    placeholder="Search high-resolution images"
    value={query}
    onChange={(e) => onSearch(e.target.value)}
    required
    title="Search Unsplash"
  />
);
