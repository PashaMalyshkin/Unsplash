import React, {
  FC, FormEvent, memo, useEffect, useState,
} from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { SearchInput } from '../SearchInput';
import { searchImages } from '../../api/images';
import { getSearchWith } from '../../utils/searchHelper';
import { Logo } from '../Logo';

export const Search: FC = memo(() => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await searchImages(query, Number(page));

      if (query !== searchQuery) {
        setSearchParams(getSearchWith(
          searchParams,
          { query: searchQuery || null },
        ));
      }

      navigate(`/search?query=${searchQuery}`);
    } catch {
      throw new Error('Unable to Search Images');
    }
  };

  useEffect(() => {
    return (() => {
      getSearchWith(searchParams, { query: null });
    });
  }, [searchParams]);

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={handleSubmit}
      >
        <Link
          to="/"
          className="logo"
        >
          <Logo />
        </Link>

        <SearchInput
          query={searchQuery}
          onSearch={setSearchQuery}
        />

        <button
          type="submit"
          className="search__button"
          title="Search"
        >
          Search
        </button>
      </form>
    </div>
  );
});
