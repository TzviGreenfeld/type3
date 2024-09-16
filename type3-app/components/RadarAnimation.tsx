import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Line, Defs, RadialGradient, Stop } from 'react-native-svg';

interface RadarAnimationProps {
  size?: number;
  color?: string;
  speed?: number;
}

const RadarAnimation: React.FC<RadarAnimationProps> = ({
  size = 200,
  color = 'gray',
  speed = 2,
}) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + speed) % 360);
    }, 50);

    return () => clearInterval(intervalId);
  }, [speed]);

  const center = size / 2;
  const radius = size / 2 - 10;

  return (
    <Svg width={size} height={size}>
      {/* Radar circle */}
      <Circle
        cx={center}
        cy={center}
        r={radius}
        stroke={color}
        fill="none"
        strokeWidth="2"
      />
      
      {/* Scanning line */}
      <Line
        x1={center}
        y1={center}
        x2={center + Math.cos(angle * Math.PI / 180) * radius}
        y2={center + Math.sin(angle * Math.PI / 180) * radius}
        stroke={color}
        strokeWidth="2"
      />
      {/* Radial gradient */}
      <Defs>
        <RadialGradient id="radarGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <Stop offset="0%" stopColor={color} stopOpacity="0.1" />
          <Stop offset="100%" stopColor={color} stopOpacity="0" />
        </RadialGradient>
      </Defs>
      
      {/* Gradient overlay */}
      <Circle
        cx={center}
        cy={center}
        r={radius}
        fill="url(#radarGradient)"
      />
    </Svg>
  );
};

export default RadarAnimation;
