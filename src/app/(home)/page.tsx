'use client';

import TaskForm from './_components/TaskForm'
import TaskCard from './_components/TaskCard'
import { useContext } from 'react';
import { storeContext } from '@/store/StoreProvider';

const Home = () => {
  const context = useContext(storeContext);
  if (!context) throw new Error('storeContext is null');
  const { tasks } = context;
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Task Management App</h1>
      <TaskForm />
      <div className='w-full max-w-md mt-8 flex flex-col gap-4'>
        {tasks.map((task, idx) => (
          <TaskCard key={idx} title={task.title} description={task.description} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default Home
