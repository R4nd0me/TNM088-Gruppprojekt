import {useEffect, useState} from 'react';


function getWindowSize(){
  const [size, setSize] = useState([0,0]); // useState for window size (width, height), default = (0,0) in px

  return size;
}
export default function HomePage(){
    return(
        <canvas className="mainCanvas"></canvas>
    )
}
