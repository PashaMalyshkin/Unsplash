import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Gallery } from '../../components/Gallery';
import { getImages } from '../../api/images';
import { Image } from '../../types/Image';
import { FetchLoadErrors } from '../../utils/FetchLoadErrors';

export const HomePage = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [columnsCount, setColumnsCount] = useState(3);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const loadImages = async () => {
    try {
      const imagesFromServer = await getImages(+page);

      setImages(imagesFromServer);
    } catch {
      throw new Error(FetchLoadErrors.UNABLE_LOAD);
    }
  };

  useEffect(() => {
    loadImages();
  }, [page]);

  return (
    <>
      <Header />

      <Gallery
        images={images}
        columnsCount={columnsCount}
        onChangeColumn={setColumnsCount}
      />
    </>
  );
};
