import React from 'react';
import { Habit } from '~/components/Habit';

export const Home = () => {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={4} />
    </div>
  );
};

export default Home;
