import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from '../../components/Search';
import { searchImages } from '../../api/images';
import { Gallery } from '../../components/Gallery';
import { SearchResponse } from '../../types/SearchResponse';
import { FetchLoadErrors } from '../../utils/FetchLoadErrors';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '1';
  const [images, setImages] = useState<SearchResponse | null>(null);
  const [columnsCount, setColumnsCount] = useState(3);

  const loadImages = async () => {
    try {
      const searchedImages = await searchImages(query, +page);

      setImages(searchedImages);
    } catch {
      throw new Error(FetchLoadErrors.UNABLE_SEARCH);
    }
  };

  useEffect(() => {
    searchParams.set('page', '1');
  }, [query]);

  useEffect(() => {
    loadImages();
  }, [query, page]);

  if (!images) {
    return null;
  }

  return (
    <section className="searching-page">
      <Search />
      {images.results.length ? (
        <Gallery
          images={images.results}
          columnsCount={columnsCount}
          onChangeColumn={setColumnsCount}
        />
      ) : (
        <h1>Nothing was found</h1>
      )}
    </section>
  );
};
