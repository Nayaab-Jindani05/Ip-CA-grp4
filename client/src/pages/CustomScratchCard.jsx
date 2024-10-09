import React, { useRef, useState, useEffect } from 'react';

const CustomScratchCard = ({ reward }) => {
  const canvasRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [hasScratched, setHasScratched] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#CCCCCC'; // Initial scratchable color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleMouseDown = () => setIsScratching(true);
  const handleMouseUp = () => setIsScratching(false);

  const handleMouseMove = (e) => {
    if (!isScratching) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Draw on the canvas to simulate scratching
    ctx.globalCompositeOperation = 'destination-out'; // Make the scratch area transparent
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false); // Draw a circle at the mouse position
    ctx.fill();

    // Check if the canvas has been sufficiently scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const scratchedPixels = Array.from(imageData.data).filter(alpha => alpha < 255).length;
    if (scratchedPixels > 5000) { // Change this value based on how much should be scratched
      setHasScratched(true);
    }
  };

  return (
    <div>
      {hasScratched ? (
        <div style={styles.reward}>
          <h3>{reward.title}</h3>
          <p>{reward.description}</p>
          <p><strong>Code:</strong> {reward.code}</p>
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          width={300}
          height={200}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={styles.canvas}
        />
      )}
    </div>
  );
};

const styles = {
  canvas: {
    border: '1px solid #000',
  },
  reward: {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default CustomScratchCard;
