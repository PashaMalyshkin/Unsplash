import { MenuItem, Select } from '@mui/material';
import React, { FC } from 'react';

interface Props {
  columnsCount: number,
  onChangeColumnsCount: (column: number) => void;
}
export const ImagesDisplayControl: FC<Props> = ({
  columnsCount,
  onChangeColumnsCount,
}) => {
  return (
    <div className="gallery__dropdown">
      <Select
        sx={
          {
            bgcolor: 'white',
            width: 176,
            height: 40,
            padding: 2,
          }
        }
        variant="standard"
        value={columnsCount}
        onChange={(e) => onChangeColumnsCount(+e.target.value)}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: '#fff',
            },
          },
        }}
      >
        <MenuItem value={3}>3 Columns</MenuItem>
        <MenuItem value={5}>5 Columns</MenuItem>
      </Select>
    </div>
  );
};
