import React, { FC, memo } from 'react';
import cn from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';

export const Pagination: FC = memo(() => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const total = 100;
  const perPage = 10;

  const limitOfPageCount = Math.ceil(total / perPage);
  const pageCounts = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= limitOfPageCount; i++) {
    pageCounts.push(i);
  }

  let pagesToShow
        = currentPage <= 2
          ? pageCounts.slice(0, 4)
          : pageCounts.slice(currentPage - 2, currentPage + 2);

  pagesToShow
        = currentPage >= pageCounts.length - 2
      ? pageCounts.slice(pageCounts.length - 4, pageCounts.length)
      : pagesToShow;
  if (pagesToShow.length < 4) {
    pagesToShow = pageCounts.slice(0);
  }

  // const isFirstPage = currentPage === 1;
  // const isLastPage = currentPage === pageCounts.length;

  return (
    <div className="pagination">
      <Link
        className="pagination__button-prev pagination__button"
        to={{
          search: getSearchWith(
            searchParams, { page: (currentPage - 1).toString() },
          ),
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
      </Link>
      {pagesToShow.map(p => (
        <Link
          key={p}
          className={cn('pagination__button', {
            'is-active': currentPage === p,
          })}
          to={{
            search: getSearchWith(
              searchParams, { page: (currentPage).toString() },
            ),
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          {p}
        </Link>
      ))}
      <Link
        className="pagination__button-next pagination__button"
        to={{
          search: getSearchWith(
            searchParams, { page: (currentPage + 1).toString() },
          ),
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
      </Link>
    </div>
  );
});
