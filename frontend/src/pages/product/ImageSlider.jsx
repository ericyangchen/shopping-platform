import { useState, useRef, useEffect } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { blue, grey } from '@mui/material/colors';

function ImageSlider({ Item }) {
  // properties
  const maxIndex = Item.src.length - 1;
  const [imgWidth, setImgWidth] = useState(0);

  // use ref to get image div width
  const imageDivRef = useRef(null);

  // update image div width dynamically (need fixing 🧨,  search: useCallback)
  useEffect(() => {
    setImgWidth(imageDivRef?.current?.offsetWidth);
    // console.log("width", imageDivRef?.current?.offsetWidth);

    // go back to first image if div is resized
    setcurrIndex(0);
    setOffset(0);
  }, [imageDivRef]);


  // current image display offset and index
  const [offset, setOffset] = useState(0);
  const [currIndex, setcurrIndex] = useState(0);

  // handle Mobile touch 
  const [lastTouch, setLastTouch] = useState(0);
  const [currMinOffset, setCurrMinOffset] = useState(0);
  const [currMaxOffset, setCurrMaxOffset] = useState(0);

  const handleTouchStart = (e) => {
    setImgWidth(e.target.clientWidth);
    setLastTouch(e.nativeEvent.touches[0].clientX);
    if (currIndex > 0) {
      setCurrMinOffset((currIndex - 1) * imgWidth);
    } else {
      setCurrMinOffset(0);
    }
    if (currIndex < maxIndex) {
      setCurrMaxOffset((currIndex + 1) * imgWidth);
    } else {
      setCurrMaxOffset(maxIndex * imgWidth);
    }
  }
  const handleTouchMove = (e) => {
    const delta = Math.floor(lastTouch - e.nativeEvent.touches[0].clientX);
    let possibleOffset = offset + delta;
    if (possibleOffset >= currMinOffset && possibleOffset <= currMaxOffset) {
      setOffset(possibleOffset);
    }
    else if (possibleOffset < currMinOffset) {
      setOffset(currMinOffset);
    }
    else if (possibleOffset > currMaxOffset) {
      setOffset(currMaxOffset);
    }
  }
  const handleTouchEnd = () => {
    let distanceToMax = currMaxOffset - offset;
    let distanceToMin = offset - currMinOffset;

    if (distanceToMax <= distanceToMin) {
      setOffset(currMaxOffset);
      setcurrIndex(Math.min(maxIndex, currIndex + 1));
    } else {
      setOffset(currMinOffset);
      setcurrIndex(Math.max(0, currIndex - 1));
    }
  }

  // handle mobile dot clicked
  const handleDotClick = (index) => {
    setOffset(index * imgWidth);
    setcurrIndex(index);
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {/* Image outer div */}
      <div className="w-full rounded-md overflow-hidden lg:w-1/2 lg:mx-auto"
        ref={imageDivRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Inner div */}
        <div className="w-full flex flex-row overflow-x-visible transition-transform will-change-transform"
          style={{
            transform: `translateX(${offset * -1}px)`,
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