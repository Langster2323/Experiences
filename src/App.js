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
      <h1 className="font-bold text-purple-500 text-6xl mb-2 text-center py-8 animate-bounce ease-duration-600">
                Happiness is in the moment
                </h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 sm:grid sm:grid-cols-2 sm:gap-3">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;