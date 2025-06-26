'use client';

import TaskForm from './_components/TaskForm'
import ShowTasks from './_components/ShowTasks'

const Home = () => {
  return (
    <main className='flex flex-col h-screen p-4 overflow-hidden'>
      <div className='flex-shrink-0 mb-15'>
        <h1 className='text-2xl font-bold text-center'>Task Management App</h1>
      </div>

      <section className='flex-1 flex gap-6 min-h-0'>
        <div className='w-1/3 flex-shrink-0'>
          <TaskForm />
        </div>

        <div className='flex-1 min-h-0'>
          <ShowTasks />
        </div>
      </section>
    </main>
  )
}

export default Home
