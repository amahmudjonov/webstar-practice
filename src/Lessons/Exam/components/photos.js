import axios from "axios";
import { Card } from "antd";
import React, { useEffect, useState } from "react";

const { Meta } = Card;

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((data) => {
      setPhotos(data.data);
    });
  }, []);
  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap'
    }}>
      {photos.slice(0, 99).map((photo, index) => {
        return (
          <Card 
            key={index}
            hoverable
            style={{ width: 240, margin: '10px' }}
            cover={<img alt="example" src={photo.url} />}
          >
            <Meta title={photo.title} description={photo.url} />
          </Card>
        );
      })}
    </div>
  );
};

export default Photos;
