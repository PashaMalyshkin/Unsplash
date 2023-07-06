import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Image } from '../../types/Image';
import { getOneImage } from '../../api/images';
// import { CloseButton } from '../CloseButton';

export const ImageModal: FC = () => {
  const { pathname } = useLocation();
  const [image, setImage] = useState<Image | null>(null);
  const loadImage = async () => {
    try {
      const imageFromServer = await getOneImage(pathname);

      setImage(imageFromServer);
    } catch {
      throw new Error('Unable to load one image');
    }
  };

  useEffect(() => {
    loadImage();
  }, []);

  if (!image || !image.urls) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__user">
          <img
            src={image.user.profile_image.medium}
            alt={image.user.name}
            className="modal__user-img"
          />

          <div>
            {image.user.name}
          </div>
        </div>

        <div className="modal__info">
          <div>
            {`Downloads: ${image.downloads}`}
          </div>

          <div>
            {`Likes: ${image.likes}`}
          </div>

          <div>
            {`Views: ${image.views}`}
          </div>
        </div>
      </div>

      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="modal__image"
      />
    </div>
  );
};
