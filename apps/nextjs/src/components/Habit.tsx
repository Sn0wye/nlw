import React from 'react';

type HabitProps = {
  completed: number;
};

export const Habit = ({ completed }: HabitProps) => {
  return (
    <div className='m-2 flex h-10 w-10 items-center justify-center rounded bg-zinc-900 text-center text-white'>
      {completed}
    </div>
  );
};
