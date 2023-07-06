import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchImages } from '../../api/images';
import { Gallery } from '../../components/Gallery';
import { SearchResponse } from '../../types/SearchResponse';
import { FetchLoadErrors } from '../../utils/FetchLoadErrors';

export const CollectionPage = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '1';
  const [images, setImages] = useState<SearchResponse | null>(null);
  const [columnsCount, setColumnsCount] = useState(3);
  const collectionName = pathname.split('/').pop() || '';

  const loadImages = async () => {
    try {
      const searchedImages = await searchImages(collectionName, +page);

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
    <div className="collection-page">
      <h1>Collection</h1>

      <Link
        to="/"
        className="collection-page__button"
        title="Go Home"
      >
        Back to Home
      </Link>

      <Gallery
        images={images.results}
        columnsCount={columnsCount}
        onChangeColumn={setColumnsCount}
      />
    </div>
  );
};
