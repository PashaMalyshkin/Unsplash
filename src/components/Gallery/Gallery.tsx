import React, {
  FC, useMemo,
} from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageItem } from '../ImageItem';
import { Pagination } from '../Pagination';
import { ImagesDisplayControl } from '../ImagesDisplayControl';
import { Image } from '../../types/Image';

interface Props {
  images: Image[];
  columnsCount: number;
  onChangeColumn: (column: number) => void;
  currentPage: number;
  onChangePage: (page: number) => void;
}
export const Gallery: FC<Props> = ({
  images,
  columnsCount,
  onChangeColumn,
  currentPage,
  onChangePage,
}) => {
  const columnsCountBreakPoints = useMemo(() => {
    return {
      350: 1,
      500: 2,
      900: columnsCount,
    };
  }, [columnsCount]);

  return (
    <div className="container">
      <section className="gallery">
        <ImagesDisplayControl
          columnsCount={columnsCount}
          onChangeColumnsCount={onChangeColumn}
        />

        <ResponsiveMasonry
          columnsCountBreakPoints={columnsCountBreakPoints}
          className="gallery__container"
        >
          <Masonry gutter="20px">
            {images?.map(image => (
              <ImageItem
                key={image.id}
                image={image}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <Pagination
          page={currentPage}
          onChangePage={onChangePage}
        />
      </section>
    </div>
  );
};
