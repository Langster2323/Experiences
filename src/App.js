import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import pictures from './pictures';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // const pictureList = () => {
  //   setImages([
  //     ...pictures
  //   ]);
  // }

  useEffect(() => {
    setImages([
      ...pictures
    ]);
    setLoading(false)
  }, []);
  return (
    <div className="mx-auto container">
      <div className="font-bold text-purple-500 text-xl mb-2">
                Photo by Ahkeem
                </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;