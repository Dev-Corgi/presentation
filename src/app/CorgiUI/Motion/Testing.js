"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Test() {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation(rotation + 10);
  };

  return (
    <div>
      <button onClick={handleRotate}>회전</button>
      <div
        style={{
          width: 100,
          height: 100,
          background: 'blue',
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <AnimatePresence>
          <motion.div
            key="rotate-box"
            initial={{ opacity: 0, scale: 0.8, rotate: rotation - 10 }}
            animate={{ opacity: 1, scale: 1, rotate: rotation }}
            exit={{ opacity: 0, scale: 0.8, rotate: rotation + 10 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            사각형
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Test;