import React from "react";
import {Image} from "../../types/Image";
import "./PhotoCard.scss";

type Props = {
  image: Image
}

export const PhotoCard: React.FC<Props> = ({ image}) => (
      <img
        src={image.url}
        alt={image.title}
        className="img"
      />
)
