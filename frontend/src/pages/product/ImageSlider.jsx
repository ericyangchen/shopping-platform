import { useState, useLayoutEffect } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { blue, grey } from '@mui/material/colors';

function ImageSlider({ Item }) {
  // properties
  const maxIndex = Item.src.length - 1;
  const [imgWidth, setImgWidth] = useState(0);


  // on window resize, go back to the first image 
  useLayoutEffect(() => {
    function updateSize() {
      setcurrIndex(0);
      setOffset(0);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // current image display offset and index
  const [offset, setOffset] = useState(0);
  const [currIndex, setcurrIndex] = useState(0);

  // handle Mobile touch 
  const [lastTouch, setLastTouch] = useState(0);
  const [delta, setDelta] = useState(0);

  const handleTouchStart = (e) => {
    setImgWidth(e.target.clientWidth);
    setLastTouch(e.nativeEvent.touches[0].clientX);
    setDelta(0);
  }
  const handleTouchMove = (e) => {
    const currDelta = Math.floor(lastTouch - e.nativeEvent.touches[0].clientX);
    setDelta(currDelta);
  }
  const handleTouchEnd = () => {
    // snap to img
    if (delta > 0 && currIndex < maxIndex) {
      // snap to +1 img
      setDelta(0);
      setOffset(offset + imgWidth);
      setcurrIndex(currIndex + 1);
    }
    else if (delta < 0 && currIndex > 0) {
      // snap to -1 img
      setDelta(0);
      setOffset(offset - imgWidth);
      setcurrIndex(currIndex - 1);
    }
    else {
      setDelta(0);
    }
  }

  // handle mobile dot clicked
  const handleDotClick = (index) => {
    setOffset(index * imgWidth);
    setDelta(0);
    setcurrIndex(index);
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {/* Image outer div */}
      <div className="w-full rounded-md overflow-hidden lg:w-1/2 lg:mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Inner div */}
        <div className="w-full flex flex-row overflow-x-visible transition-transform will-change-transform"
          style={{
            transform: `translateX(${(offset + delta) * -1}px)`,
          }}
        >
          {Item.src.map(imageURL => (
            <img className="h-full w-full object-cover"
              key={imageURL}
              src={imageURL}
              alt={Item.title}
            />
          ))}
        </div>
      </div>

      {/* Dot div */}
      <div>
        {Array(maxIndex + 1).fill().map((item, index) => (
          <FiberManualRecordIcon onClick={() => handleDotClick(index)}
            key={index}
            sx={{ color: `${index === currIndex ? blue[700] : grey[400]}`, fontSize: 10 }}
          />
        ))
        }
      </div>
    </div>
  )
}

export default ImageSlider