import React from 'react';
import { View, Text } from 'react-native';

interface IBanner {
  title: string;
  className?: string;
}

const Banner = ({ title, className }: IBanner) => {
  return (
    <Text className={`text-5xl font-medium text-dark2 leading-tight ${className}`}>{title}</Text>
  );
};

export default Banner;