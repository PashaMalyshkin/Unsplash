import React, { FC, memo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';

export const Pagination: FC = memo(() => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') || '1';

  return (
    <div className="pagination">
      <Link
        className="pagination__button-prev pagination__button"
        to={{
          search: getSearchWith(
            searchParams, { page: (+page - 1).toString() },
          ),
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
      </Link>
      <Link
        className="pagination__button-next pagination__button"
        to={{
          search: getSearchWith(
            searchParams, { page: (+page + 1).toString() },
          ),
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
      </Link>
    </div>
  );
});
