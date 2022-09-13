import axios from "axios";
import React, { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const [ind, setInd] = useState([]);

  useEffect(() => {
    const urlImg = "https://jsonplaceholder.typicode.com/photos";

    axios.get(urlImg).then((data) => {
      setPhotos(data.data.slice(0, 100));
    });
  }, []);
  return (
    <>
      {photos.map((photo) => {
        return (
          <div className="card w-25 mt-1" key={photo.id}>
            <img src={photo.url} alt="" className="card-img-top" />
          </div>
        );
      })}
    </>
  );
};

export default Photos;
