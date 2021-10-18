import React from 'react';
import { useState, useEffect } from 'react';
import { RotateLoader } from 'react-spinners';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <div>
      <div className='cursor' style={{ left: x }}></div>
    </div>
  );
}
export default Cursor;
