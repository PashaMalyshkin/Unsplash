import React, { FC, memo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';

interface Props {
  page: number;
  onChangePage: (page: number) => void;
}
export const Pagination: FC<Props> = memo(({ page, onChangePage }) => {
  const [searchParams] = useSearchParams();

  const handlePrevPage = () => {
    if (page > 1) {
      onChangePage(page - 1);
    }
  };

  const handleNextPage = () => {
    onChangePage(page + 1);
  };

  return (
    <>
      <Link
        to={{
          search: getSearchWith(
            searchParams, { page: page.toString() },
          ),
        }}
        onClick={handlePrevPage}
      >
        Previous
      </Link>
      <Link
        to={{
          search: getSearchWith(
            searchParams, { page: page.toString() },
          ),
        }}
        onClick={handleNextPage}
      >
        Next
      </Link>
    </>
  );
});
