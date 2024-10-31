"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setImagePicked] = useState();
  const imageInput = useRef();
  const handleClick = () => {
    imageInput.current.click();
  };
  function handleImageChanged(event) {
    const file = event.target.files[0];

    if (!file) {
        setImagePicked(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePicked(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt="selected image" fill />}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={imageInput}
          onChange={handleImageChanged}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
