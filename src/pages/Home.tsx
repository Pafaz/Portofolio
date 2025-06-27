import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Skills } from '../components/home/Skills';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
    </>
  );
};