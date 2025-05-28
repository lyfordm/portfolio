import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    let mouseX = 0, mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      }
      requestAnimationFrame(updateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="cursor"></div>;
}