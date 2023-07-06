import { GrFormClose } from 'react-icons/gr';
import React, { FC, memo } from 'react';

interface Props {
  onRemove: (query: string) => void;
}
export const ClearButton: FC<Props> = memo(({ onRemove }) => {
  return (
    <button
      className="search__clear-button"
      type="button"
      title="Clear"
      onClick={() => onRemove('')}
    >
      <GrFormClose
        size={16}
        className="search__clear-icon"
      />
    </button>
  );
});
