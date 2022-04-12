import React, { useState } from "react";
import { Image } from "../../types/Image";
import {request} from "../../api";
import {PhotoCard} from "../PhotoCard/PhotoCard";
import "./PhotoList.scss";
import {Button} from "react-bootstrap";

export const PhotosList = () => {
  const [input, setInput] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>( false);
  const [isValid, setIsValid] = useState<boolean>( true);
  const [noImages, setNoImages] = useState<boolean>( true);
  const [inputIdCopy, setInputIdCopy] = useState('');

  const loading = (a: boolean) => {
    setIsLoading(a);
  }

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => {
      if (inputIdCopy === event.target.value) {
        setIsValid(true);
      }
      return event.target.value;
    });

    if (+event.target.value > 0
      && +event.target.value <=100
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  const visibleAlbum = async () => {
    setInputIdCopy(input);
    loading(true);
    setImages(await request(+input));
    loading(false);
    setInput('');
    setIsValid(true);
    setNoImages(false);
  };

  return(
    <div className="PhCard_main__container">
      <div className="input__container">
        <input
          value={input}
          className="input"
          onChange={inputChange}
          type="text"
          placeholder="Please enter the number"
        />
        <Button
          onClick={visibleAlbum}
          type="submit"
          disabled={isValid}
        >
          Get photos
        </Button>
      </div>
      {isLoading ? (
        <>
          <p className="loading">Loading... Please wait</p>
        </>
      ) :(
        noImages ? (
          <p>No images</p>
        ) : (
          <div className="photoCard__container">
            <ul className="photoCard__container__list">
              {images.map(image =>
                <li
                  key={image.id}
                  className="photoCard__container__list__item"
                >
                  <PhotoCard image={image} />
                </li> )}
            </ul>
          </div>
        )
      )}

    </div>

  )
}
