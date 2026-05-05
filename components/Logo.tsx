import React from 'react';

interface LogoProps {
  className?: string;
  fill?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", fill = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trunk */}
      <path d="M48,90 L52,90 L52,50 L48,50 Z" fill={fill} />
      
      {/* Palm Leaves */}
      <path d="M50,50 C30,30 20,40 10,20 C30,30 45,30 50,50 Z" fill={fill} />
      <path d="M50,50 C70,30 80,40 90,20 C70,30 55,30 50,50 Z" fill={fill} />
      <path d="M50,50 C50,20 60,10 70,10 C55,25 50,30 50,50 Z" fill={fill} />
      <path d="M50,50 C50,20 40,10 30,10 C45,25 50,30 50,50 Z" fill={fill} />
    </svg>
  );
};

export default Logo;
