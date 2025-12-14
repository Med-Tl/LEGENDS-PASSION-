import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, hoverEffect = true }) => {
  return (
    <motion.div 
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 40px -20px rgba(0,0,0,0.7)' } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`glass-panel rounded-2xl overflow-hidden relative ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;