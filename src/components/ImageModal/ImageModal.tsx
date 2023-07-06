import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image } from '../../types/Image';
import { getOneImage } from '../../api/images';
import { FetchLoadErrors } from '../../utils/FetchLoadErrors';

export const ImageModal: FC = () => {
  const { pathname } = useLocation();
  const [image, setImage] = useState<Image | null>(null);
  const loadImage = async () => {
    try {
      const imageFromServer = await getOneImage(pathname);

      setImage(imageFromServer);
    } catch {
      throw new Error(FetchLoadErrors.UNABLE_LOAD_ONE);
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

      <div className="modal__tags">
        {image.tags.slice(0, 5).map(tag => (
          <Link
            key={tag.title}
            to={`/collection/${tag.title}`}
            className="modal__tag-link"
          >
            {tag.title}
          </Link>
        ))}
      </div>

      <Link
        to="/"
        className="modal__close"
      />
    </div>
  );
};
