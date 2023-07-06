import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Gallery } from '../../components/Gallery';
import { getImages } from '../../api/images';
import { Image } from '../../types/Image';

export const HomePage = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [columnsCount, setColumnsCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const loadImages = async () => {
    try {
      const imagesFromServer = await getImages(currentPage);

      setImages(imagesFromServer);
    } catch {
      throw new Error('Unable to load images');
    }
  };

  useEffect(() => {
    loadImages();
  }, [currentPage]);

  return (
    <>
      <Header />

      <Gallery
        images={images}
        columnsCount={columnsCount}
        onChangeColumn={setColumnsCount}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
    </>
  );
};
