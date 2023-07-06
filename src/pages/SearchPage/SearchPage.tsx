import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from '../../components/Search';
import { searchImages } from '../../api/images';
import { Gallery } from '../../components/Gallery';
import { SearchResponse } from '../../types/SearchResponse';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '';
  const [images, setImages] = useState<SearchResponse | null>(null);
  const [columnsCount, setColumnsCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const loadImages = async () => {
    if (query || page) {
      const searchedImages = await searchImages(query, currentPage);

      setImages(searchedImages);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    try {
      loadImages();
    } catch {
      throw new Error('Unable to Search images');
    }
  }, [query, page]);

  if (!images) {
    return null;
  }

  return (
    <section className="searching-page">
      <Search />

      <Gallery
        images={images.results}
        columnsCount={columnsCount}
        onChangeColumn={setColumnsCount}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
    </section>
  );
};
